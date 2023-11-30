import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import { Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Footer from "../components/footer";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    color: "#0097B2",
    borderRadius: "2px solid black",
    textAlign: "center",
    display: "inline-block",
    transition: "background-color 0.4s, color 0.4s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0097B2 !important",
      color: "white !important",
    },
  },
  menuBookIcon: {
    cursor: "pointer",
    color: "#0097B2",
    "&:hover": {
      color: "#007b91",
    },
  },
  mangaDetailsContainer: {
    display: "flex",
    width: "80%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  tomeImage: {
    flex: 1,
    maxWidth: "300px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  separator: {
    width: "100%",
    height: "2px",
    background: "#333",
    margin: "20px 0",
  },
  mangaDetails: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "50px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  theme: {
    fontSize: "16px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(100px, 1fr))",
    gap: "20px",
    width: "80%",
    marginTop: "10px",
  },
  mangaVolumeCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: "1px solid #ddd",
    padding: "10px",
    transition: "transform 0.3s",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "240px",
    margin: "0 auto",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  releaseDate: {
    position: "absolute",
    top: "4px",
    left: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "4px 4px",
    borderRadius: "4px",
    fontSize: "11px",
    zIndex: 1,
  },

  mangaVolumeImage: {
    borderRadius: "8px",
    objectFit: "cover",
  },
  mangaVolumeTitle: {
    fontSize: "15px",
    display: "inline-block",
    marginRight: "5px",
    marginBottom: "5px",
  },
  mangaTitle: {
    fontSize: "15px",
    display: "inline-block",
    marginBottom: "5px",
    color: "grey",
  },
  mangaAuthor: {
    fontSize: "13px",
    color: "#777",
    textAlign: "left",
  },
  errorPopup: {
    position: "fixed",
    // top: "20px",
    // right: "20px",
    backgroundColor: "#8B0000",
    color: "white",
    padding: "5px",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "9999",
  },
  successPopup: {
    position: "fixed",
    // top: "10px",
    // right: "20px",
    backgroundColor: "#123f55",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "9999",
  },
}));

const AllMangas = () => {
  const { mangaId } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const [mangaDetails, setMangaDetails] = useState(null);
  const [mangaVolumes, setMangaVolumes] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [userMangaVolumes, setUserMangaVolumes] = useState([]);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAddedToLibraryPopupOpen, setIsAddedToLibraryPopupOpen] =
  useState(false);

  useEffect(() => {
    axios.get(`http://localhost:4000/manga/${mangaId}`).then((response) => {
      setMangaDetails(response.data);
    });

    axios
      .get(`http://localhost:4000/mangaVolume/${mangaId}/volumes`)
      .then((response) => {
        setMangaVolumes(response.data);
      });
  }, [mangaId]);

  const addToLibrary = (event, mangaVolumeId) => {
    event.stopPropagation();
  
    const isAlreadyAdded = userMangaVolumes.some(mv => mv.id === mangaVolumeId);
    if (isAlreadyAdded) {
      showErrorPopup("Manga déjà ajouté");
      return;
    }
  
    const token = localStorage.getItem("token");
    axios.post(
      "http://localhost:4000/userMangaVolume",
      { mangaVolumeId },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(response => {
      setUserMangaVolumes([...userMangaVolumes, response.data]);
      setIsAddedToLibraryPopupOpen(true); 
  
      setTimeout(() => {
        setIsAddedToLibraryPopupOpen(false); 
      }, 3000);
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        showErrorPopup("Manga déjà ajouté");
      } else {
        console.error("Erreur ajout manga:", error);
      }
    });
  };
  

  const showErrorPopup = (message) => {
    setErrorMessage(message);
    setIsErrorVisible(true);

    setTimeout(() => {
      setIsErrorVisible(false);
      setErrorMessage("");
    }, 32000);
  };


  if (!mangaDetails) return <div>Chargement...</div>;

  const firstVolumeImage = mangaVolumes.length > 0 ? mangaVolumes[0].image : "";

  return (
    <div className={classes.container}>
      <SearchBar />
      <div className={classes.mangaDetailsContainer}>
        <img
          src={firstVolumeImage}
          alt={mangaDetails.title}
          className={classes.tomeImage}
        />
        <div className={classes.mangaDetails}>
          <h2 className={classes.title}>{mangaDetails.title}</h2>
          <p className={classes.theme}>
            <strong>Thème: {`${mangaDetails.theme}`} </strong>
          </p>
          <p className={classes.theme}>
            <strong>Auteur: {`${mangaDetails.author}`}</strong>
          </p>
          <p className={classes.description}>{mangaDetails.description}</p>
        </div>
      </div>

      <hr className={classes.separator} />
      <div className={classes.grid}>
        {mangaVolumes.map((mangaVolume, index) => (
          <div
            key={mangaVolume.id}
            className={classes.mangaVolumeCard}
            onClick={() => navigate(`/mangaVolume/${mangaVolume.id}`)}
          >
            <img
              src={mangaVolume.image}
              alt={mangaVolume.title}
              className={classes.mangaVolumeImage}
            />
            <div>
              <p className={classes.mangaVolumeTitle}>
                {mangaVolume.Manga.title}
              </p>
              <p className={classes.mangaTitle}>- {mangaVolume.title}</p>
            </div>
            <p className={classes.mangaAuthor}>{mangaDetails.author}</p>
            <Button
              className={classes.button}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={(event) => {
                event.stopPropagation();
                addToLibrary(event, mangaVolume.id);
              }}
            >
              {hoverIndex === index ? (
                "Ajouter"
              ) : (
                <MenuBookIcon className={classes.menuBookIcon} />
              )}
            </Button>
          </div>
        ))}
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
      <Footer />
    </div>
  );
};

export default AllMangas;
