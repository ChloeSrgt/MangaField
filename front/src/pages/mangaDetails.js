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
    width: "300px",
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
      color: "#0097B2",
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
}));

const MangaDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [mangaDetails, setMangaDetails] = useState(null);
  const navigate = useNavigate();
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isAddedToLibraryPopupOpen, setIsAddedToLibraryPopupOpen] =
    useState(false);

  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  const addToUserLibrary = () => {
    if (isLoggedIn()) {
      const token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:4000/userLibrary",
          { mangaId: mangaDetails.mangaId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setIsAddedToLibraryPopupOpen(true);

          setTimeout(() => {
            setIsAddedToLibraryPopupOpen(false);
          }, 3000);
        })
        .catch((error) => {
          showErrorPopup("Manga déjà ajouté");
        });
    } else {
      navigate("/login");
    }
  };

  const showErrorPopup = (message) => {
    setIsErrorVisible(true);

    setTimeout(() => {
      setIsErrorVisible(false);
    }, 3000);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/mangaVolume/${id}`).then((response) => {
      setMangaDetails(response.data);
    });
  }, [id]);

  if (!mangaDetails) return <div>Loading...</div>;

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
            <button className={classes.button} onClick={addToUserLibrary}>
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
