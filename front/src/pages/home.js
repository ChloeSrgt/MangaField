import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
// import MangaCarousel from "../components/mangaCarousel";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";

// useState : Pour définir un état local dans un composant.
// useEffect : Pour exécuter du code lors d’un changement d’état.
// debounce

const useStyles = makeStyles(() => ({
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
    top: "1px",
    left: "15px",
    backgroundColor: "rgba(295, 255, 255, 0.7)",
    padding: "4px 4px",
    borderRadius: "4px",
    fontSize: "11px",
    zIndex: 1,
  },
  mangaVolumeImage: {
    width: "280px",
    height: "350px",
    borderRadius: "8px",
    objectFit: "contain",
    alignSelf: "center",
  },
  mangaVolumeTitle: {
    fontSize: "15px",
    display: "inline-block",
    alignItems: "flex-start",
    marginRight: "5px",
    marginBottom: "5px",
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
  menuBookIcon: {
    cursor: "pointer",
    color: "#067790",
    "&:hover": {
      color: "#007b91",
    },
  },
  button: {
    color: "#067790",
    borderRadius: "2px solid black",
    textAlign: "center",
    display: "inline-block",
    transition: "background-color 0.4s, color 0.4s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#067790 !important",
      color: "white !important",
    },
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

const Home = () => {
  const classes = useStyles();
  const [mangasVolume, setMangasVolume] = useState([]);
  const navigate = useNavigate();
  const [userMangaVolume, setUserMangaVolume] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAddedToLibraryPopupOpen, setIsAddedToLibraryPopupOpen] =
    useState(false);

  const isLoggedIn = () => localStorage.getItem("token");

  useEffect(() => {
    if (isLoggedIn()) {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:4000/userMangaVolume", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserMangaVolume(response.data);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération de la bibliothèque utilisateur",
            error
          );
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/mangaVolume")
      .then((response) => {
        setMangasVolume(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des mangas: ", error);
      });
  }, []);

  const addToLibrary = (event, mangaVolumeId) => {
    event.stopPropagation();
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    const isAlreadyAdded = userMangaVolume.some(
      (mv) => mv.id === mangaVolumeId
    );
    if (isAlreadyAdded) {
      showErrorPopup("Manga déjà ajouté");
      return;
    }

    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:4000/userMangaVolume",
        { mangaVolumeId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        const addedMangaVolume = mangasVolume.find(
          (mv) => mv.id === mangaVolumeId
        );
        setUserMangaVolume([...userMangaVolume, addedMangaVolume]);
        setIsAddedToLibraryPopupOpen(true);
        setTimeout(() => {
          setIsAddedToLibraryPopupOpen(false);
        }, 3000);
      })
      .catch((error) => {
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
    }, 1000);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/mangaVolume")
      .then((response) => {
        const sortedMangaVolumes = response.data.sort((a, b) => {
          if (a.mangaId === b.mangaId) {
            const numA = parseInt(a.title.split(" ")[1]);
            const numB = parseInt(b.title.split(" ")[1]);
            return numB - numA;
          }
          return a.mangaId - b.mangaId;
        });

        const uniqueMangaVolumes = [];
        let currentMangaId = null;
        for (let mangaVolume of sortedMangaVolumes) {
          if (mangaVolume.mangaId !== currentMangaId) {
            uniqueMangaVolumes.push(mangaVolume);
            currentMangaId = mangaVolume.mangaId;
          }
        }

        setMangasVolume(uniqueMangaVolumes);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des mangas: ", error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <SearchBar />
      {/* <MangaCarousel mangasVolume={mangasVolume} /> */}
      <div className={classes.grid}>
        {mangasVolume.map((mangaVolume, index) => (
          <div
            key={mangaVolume.id}
            className={classes.mangaVolumeCard}
            onClick={() =>
              isLoggedIn()
                ? navigate(`/mangaVolume/${mangaVolume.id}`)
                : navigate("/login")
            }
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
            <p className={classes.mangaAuthor}>{mangaVolume.Manga.author}</p>

            <p className={classes.releaseDate}>
              <strong>Sortie le</strong>{" "}
              {new Date(mangaVolume.releaseDate).toLocaleDateString()}
            </p>
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

export default Home;
