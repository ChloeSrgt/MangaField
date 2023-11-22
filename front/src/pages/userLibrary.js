import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchBar";

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

const UserLibrary = () => {
  const classes = useStyles();
  const [userMangaVolume, setUserMangaVolume] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/userMangaVolume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserMangaVolume(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération de la bibliothèque utilisateur",
          error
        );
      });
  }, []);

  const handleDeleteMangaVolume = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:4000/userMangaVolume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserMangaVolume((prevUserMangaVolume) =>
          prevUserMangaVolume.filter((entry) => entry.id !== id)
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la suppression du volume de manga",
          error
        );
      });
  };

  return (
    <div className={classes.container}>
      <SearchBar />
      <p>My Manga Collection:</p>
      <div className={classes.grid}>
        {userMangaVolume.map((data) => (
          <div key={data.MangaVolume.id} className={classes.mangaVolumeCard}>
            <img
              src={data.MangaVolume.image}
              alt={data.MangaVolume.title}
              className={classes.mangaVolumeImage}
            />
            <div>
              <p className={classes.mangaVolumeTitle}>
                {data.MangaVolume.Manga.title}
              </p>
              <p className={classes.mangaTitle}>- {data.MangaVolume.title}</p>
              <p className={classes.mangaAuthor}>
                {data.MangaVolume.Manga.author}
              </p>
              <button onClick={() => handleDeleteMangaVolume(data.id)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLibrary;
