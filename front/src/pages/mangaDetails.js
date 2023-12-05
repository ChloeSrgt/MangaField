import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "20px",
    marginLeft: "20px",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
    transition: "background-color 0.3s",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  detailsContainer: {
    display: "flex",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "80%",
    marginTop: "20px",
    backgroundColor: "#ffffff",
  },
  mangaImage: {
    width: "400px",
    marginRight: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  mangaDetails: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "50px",
  },
  description: {
    marginBottom: "15px",
  },
  lowerSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginTop: "20px",
  },
  descriptionSection: {
    flex: 2,
  },
  infoSection: {
    flex: 1,
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginLeft: "20px",
  },
  titleLink: {
    textDecoration: "underline",
    color: "black",
    "&:hover": {
      color: "#067790",
    },
  },
  errorPopup: {
    backgroundColor: "#FF6B6B",
    color: "#FFF",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
    textAlign: "center",
  },
  successPopup: {
    backgroundColor: "#123f55",
    color: "#FFF",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
    textAlign: "center",
  },
  volumeCount: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  statusBox: {
    display: "inline-block",
    padding: "8px 16px",
    margin: "8px",
    borderRadius: "20px",
    backgroundColor: "#067790",
    color: "white",
    fontSize: "11px",
    fontWeight: "bold",
    textTransform: "uppercase",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
}));

const MangaDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const [mangaDetails, setMangaDetails] = useState(null);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isAddedToLibraryPopupOpen, setIsAddedToLibraryPopupOpen] =
    useState(false);
  const [totalVolumes, setTotalVolumes] = useState(0);

  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/mangaVolume/${id}`).then((response) => {
      setMangaDetails(response.data);
    });
  }, [id]);
  
  useEffect(() => {
    if (mangaDetails) {
      axios.get(`http://localhost:4000/mangaVolume/${mangaDetails.mangaId}/volumes`).then((response) => {
        const highestVolume = Math.max(...response.data.map(volume => parseInt(volume.title.split(" ")[1])));
        setTotalVolumes(highestVolume);
      });
    }
  }, [mangaDetails]);
  
  const addToLibrary = () => {
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:4000/userMangaVolume",
        { mangaVolumeId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setIsAddedToLibraryPopupOpen(true);
        setTimeout(() => {
          setIsAddedToLibraryPopupOpen(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du manga:", error);
        setIsErrorVisible(true);
        setTimeout(() => {
          setIsErrorVisible(false);
        }, 1000);
      });
  };

  if (!mangaDetails || totalVolumes === 0) return <div>Chargement...</div>;

  const currentVolumeNumber = parseInt(mangaDetails.title.split(" ")[1]);

  return (
    <div className={classes.container}>
      <SearchBar />
      <div className={classes.detailsContainer}>
        <img
          src={mangaDetails.image}
          alt={mangaDetails.title}
          className={classes.mangaImage}
        />
        <div className={classes.mangaDetails}>
        <div> 
          <p className={classes.statusBox}>{mangaDetails.Manga.status}</p>
          <p className={classes.statusBox}>{`Tome ${currentVolumeNumber} / ${totalVolumes}`}</p>
        </div>
          <h2 className={classes.title}>
            <Link
              to={`/manga/${mangaDetails.mangaId}`}
              className={classes.titleLink}
            >
              {mangaDetails.Manga.title}
            </Link>

            {` - ${mangaDetails.title}`}
          </h2>
          <div className={classes.buttonContainer}>
            <button className={classes.button} onClick={addToLibrary}>
              Ajouter à ma collection
            </button>
            <button
              className={classes.button}
              onClick={() => navigate("/libraryMap")}
            >
              Trouver ma librairie
            </button>
          </div>
        </div>
      </div>
      <div className={classes.lowerSection}>
        <div className={classes.descriptionSection}>
          <h3>Description</h3>
          <p className={classes.description}>{mangaDetails.description}</p>
        </div>
        <div className={classes.infoSection}>
          <p>
            <strong>Auteur:</strong> {mangaDetails.Manga.author}
          </p>
          <p>
            <strong>Thème:</strong> {mangaDetails.Manga.theme}
          </p>
        </div>
      </div>
      {isErrorVisible && (
        <div className={classes.errorPopup}>
          <p>Manga déjà ajouté</p>
        </div>
      )}
      {isAddedToLibraryPopupOpen && (
        <div className={classes.successPopup}>
          Manga ajouté à votre bibliothèque
        </div>
      )}
    </div>
  );
};

export default MangaDetails;
