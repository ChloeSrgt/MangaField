import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBar from "../components/searchBar";
import Footer from "../components/footer";

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
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      width: "90%",
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
      gap: "10px",
    },
  },
  deleteIcon: {
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
    transition: "background-color 0.4s, color 0.4s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#067790 !important",
      color: "white !important",
    },
    contentContainer: {
      textAlign: "left",
    },
    actionContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  mangaVolumeCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "240px",
    margin: "0 auto",
    "@media (max-width: 1200px)": {
      width: "200px",
    },
    "@media (max-width: 768px)": {
      width: "150px",
    },
    "@media (max-width: 480px)": {
      width: "100%",
      padding: "5px",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  mangaVolumeImage: {
    width: "100%",
    height: "auto",
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
  actionContainer: {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: "10px",
    right: "3px",
  },
}));

const UserLibrary = () => {
  const classes = useStyles();
  const [userMangaVolume, setUserMangaVolume] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (mangaVolumeId) => {
    navigate(`/mangaDetails/${mangaVolumeId}`);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/userMangaVolume", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserMangaVolume(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving user library", error);
      });
  }, []);

  const handleDeleteMangaVolume = (event, id) => {
    event.stopPropagation();
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:4000/userMangaVolume/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setUserMangaVolume((prev) => prev.filter((entry) => entry.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting manga volume", error);
      });
  };

  return (
    <div className={classes.container}>
      <SearchBar />
      <div className={classes.grid}>
        {userMangaVolume.map((data, index) => (
          <div
            key={data.MangaVolume.id}
            className={classes.mangaVolumeCard}
            onClick={() => handleCardClick(data.MangaVolume.id)}
          >
            <img
              src={data.MangaVolume.image}
              alt={data.MangaVolume.title}
              className={classes.mangaVolumeImage}
            />
            <div className={classes.contentContainer}>
              <p className={classes.mangaVolumeTitle}>
                {data.MangaVolume.Manga.title}
              </p>
              <p className={classes.mangaTitle}>- {data.MangaVolume.title}</p>
              <p className={classes.mangaAuthor}>
                {data.MangaVolume.Manga.author}
              </p>
            </div>
            <div className={classes.actionContainer}>
              <Button
                className={classes.button}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={(event) => handleDeleteMangaVolume(event, data.id)}
              >
                {hoverIndex === index ? (
                  "Supprimer"
                ) : (
                  <DeleteIcon className={classes.deleteIcon} />
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLibrary;
