import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import Footer from "../components/footer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button } from "@mui/material";
import { DarkModeContext } from "../App";

interface MangaVolume {
  id: string;
  title: string;
  image: string;
  Manga: {
    title: string;
    author: string;
  };
  releaseDate: string;
}

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
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
      marginTop: "50px",
      "@media (max-width: 1200px)": {
        gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
      },
      "@media (max-width: 768px)": {
        gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
        width: "90%",
      },
      "@media (max-width: 480px)": {
        gridTemplateColumns: "1fr",
        gap: "10px",
      },
    },
    mangaVolumeCard: {
      backgroundColor: darkMode ? "#151414" : "white",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      border: darkMode ? "1px solid #1b373d" : "1px solid #ddd",
      padding: "10px",
      transition: "transform 0.3s",
      boxShadow: darkMode ? "0 4px 8px rgba(155,155,155,0.2)" : "0 4px 8px rgba(0,0,0,0.1)",
      width: "240px",
      margin: "0 auto",
      "&:hover": {
        transform: "scale(1.05)",
      },
      "@media (max-width: 768px)": {
        width: "200px",
      },
      "@media (max-width: 480px)": {
        width: "100%",
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
      "@media (max-width: 768px)": {
        width: "200px",
        height: "250px",
      },
      "@media (max-width: 480px)": {
        width: "100%",
        height: "auto",
      },
    },
    mangaVolumeTitle: {
      fontSize: "15px",
      display: "inline-block",
      alignItems: "flex-start",
      marginRight: "5px",
      marginBottom: "5px",
      fontWeight: "bold",
      color: darkMode ? "white" : "black",
    },
    mangaTitle: {
      fontSize: "15px",
      display: "inline-block",
      marginBottom: "5px",
      color: darkMode ? "white" : "grey",
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
      backgroundColor: "#8B0000",
      color: "white",
      padding: "5px",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      zIndex: "9999",
    },
    successPopup: {
      position: "fixed",
      backgroundColor: "#123f55",
      color: "white",
      padding: "10px",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      zIndex: "9999",
    },
  }));

    const classes = useStyles();
    const navigate = useNavigate();
    const [mangasVolume, setMangasVolume] = useState<MangaVolume[]>([]);
    const [userMangaVolume, setUserMangaVolume] = useState<MangaVolume[]>([]);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isAddedToLibraryPopupOpen, setIsAddedToLibraryPopupOpen] = useState(false);
  
    const isLoggedIn = (): boolean => !!localStorage.getItem("token");
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

  const addToLibrary = (event: React.MouseEvent<HTMLButtonElement>, mangaVolumeId: string) => {
    event.stopPropagation();
    if (!isLoggedIn()) {
      showErrorPopup("Vous devez être connecté");
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
      const addedMangaVolume = mangasVolume.find((mv) => mv.id === mangaVolumeId);
      if (addedMangaVolume) {
        setUserMangaVolume([...userMangaVolume, addedMangaVolume]);
        setIsAddedToLibraryPopupOpen(true);
        setTimeout(() => {
          setIsAddedToLibraryPopupOpen(false);
        }, 3000);
      }
    })
    .catch((error) => {
        if (error.response && error.response.status === 400) {
          showErrorPopup("Manga déjà ajouté");
        } else {
          console.error("Erreur ajout manga:", error);
        }
      });
  };

  const showErrorPopup = (message: string) => {
    setErrorMessage(message);
    setIsErrorVisible(true);

    setTimeout(() => {
      setIsErrorVisible(false);
      setErrorMessage("");
    }, 1500);
  };

  useEffect(() => {
    axios
      .get<MangaVolume[]>("http://localhost:4000/mangaVolume")
      .then((response) => {
        const sortedMangaVolumes = response.data.sort((a: MangaVolume, b: MangaVolume) => {
          if (a.Manga.title === b.Manga.title) {
            const numA = parseInt(a.title.split(" ")[1]);
            const numB = parseInt(b.title.split(" ")[1]);
            return numB - numA;
          }
          return a.Manga.title.localeCompare(b.Manga.title);
        });
  
        const uniqueMangaVolumes: MangaVolume[] = [];
        let currentMangaId: string | null = null;
        for (let mangaVolume of sortedMangaVolumes) {
          if (mangaVolume.Manga.title !== currentMangaId) {
            uniqueMangaVolumes.push(mangaVolume);
            currentMangaId = mangaVolume.Manga.title;
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
      <div className={classes.grid}>
        {mangasVolume.map((mangaVolume, index) => (
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
            <p>{errorMessage}</p>
          </div>
        )}
        {isAddedToLibraryPopupOpen && (
          <div className={classes.successPopup}>
            Manga ajouté à votre bibliothèque
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
