import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    width: "80%",
    marginTop: "20px",
  },
  mangaCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "10px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  mangaImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover",
  },
  mangaTitle: {
    fontSize: "15px",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/manga")
      .then((response) => {
        setMangas(response.data);
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
        {mangas.map((manga, index) => (
          <div key={manga.id} className={classes.mangaCard}>
            <img
              src={manga.image}
              alt={manga.title}
              className={classes.mangaImage}
            />
            <h2 className={classes.mangaTitle}>{manga.title}</h2>
            <p>{manga.description}</p>
            <p>
              <strong>Auteur :</strong> {manga.author}
            </p>
            <p>
              <strong>Date de sortie :</strong>{" "}
              {new Date(manga.releaseDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
