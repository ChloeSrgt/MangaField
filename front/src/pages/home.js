import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
}));

const Home = () => {
  const classes = useStyles();
  const [mangasVolume, setMangasVolume] = useState([]);
  const navigate = useNavigate();

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

  return (
    <div className={classes.container}>
      <SearchBar />
      <h1>Catalogue Manga</h1>
      <div className={classes.grid}>
        {mangasVolume.map((mangaVolume, index) => (
          <div
            key={mangaVolume.id}
            className={classes.mangaVolumeCard}
            onClick={() => navigate(`/manga/${mangaVolume.id}`)}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
