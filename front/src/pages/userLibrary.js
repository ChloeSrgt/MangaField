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

const UserLibrary = () => {
  const classes = useStyles();
  const [userLibrary, setUserLibrary] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/my-library")
      .then(response => {
        setUserLibrary(response.data);
      })
      .catch(error => {
        console.error("Error fetching user library", error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <SearchBar />
      <p>My Manga Collection:</p>
      <div className={classes.grid}>
        {userLibrary.map(manga => (
          <div key={manga.id} className={classes.mangaVolumeCard}>
            <img src={manga.image} alt={manga.title} className={classes.mangaVolumeImage} />
            <div>
              <h3 className={classes.mangaVolumeTitle}>{manga.title}</h3>
              <p className={classes.mangaTitle}>{manga.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLibrary;

