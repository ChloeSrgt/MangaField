import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Tooltip from "@mui/material/Tooltip";

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
    top: "4px",
    left: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
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
  menuBookIcon: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    cursor: "pointer",
    color: "#0097B2",
    "&:hover": {
      color: "#007b91",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [mangasVolume, setMangasVolume] = useState([]);
  const navigate = useNavigate();
  const [userLibrary, setUserLibrary] = useState([]);

  const isLoggedIn = () => localStorage.getItem("token");

  useEffect(() => {
    if (isLoggedIn()) {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:4000/my-library", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserLibrary(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user library", error);
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/mangaVolume")
      .then((response) => {
        setMangasVolume(mangasVolume);
      })
      .catch((error) => {
        console.error("Error fetching mangas: ", error);
      });
  }, []);

  const addToLibrary = (event, mangaVolumeId) => {
    event.stopPropagation();
    if (isLoggedIn()) {
      const token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:4000/my-library",
          { mangaId: mangaVolumeId }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("Manga added:", response.data);
          const addedMangaVolume = mangasVolume.find(mv => mv.id === mangaVolumeId);
          setUserLibrary([...userLibrary, addedMangaVolume]);
        })
        .catch((error) => {
          console.error("Error adding manga:", error);
        });
    } else {
      navigate("/login");
    }
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
      <h1>Dernières sorties</h1>
      <div className={classes.grid}>
        {mangasVolume.map((mangaVolume) => (
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
            <Tooltip title="Ajouter à ma bibliothèque">
              <MenuBookIcon
                className={classes.menuBookIcon}
                onClick={(event) => addToLibrary(event, mangaVolume.id)}
              />
            </Tooltip>
            <p className={classes.releaseDate}>
              <strong>Sortie le</strong>{" "}
              {new Date(mangaVolume.releaseDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
