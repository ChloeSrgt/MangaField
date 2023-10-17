import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

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
}));

const MangaDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [mangaDetails, setMangaDetails] = useState(null);

  const handleUserLibrary = () => {
    Navigate("/userLibrary");
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/mangaVolume/${id}`).then((response) => {
      setMangaDetails(response.data);
    });
  }, [id]);

  if (!mangaDetails) return <div>ça charge</div>;

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
              to={`/manga/${mangaDetails.Manga.id}`}
              className={classes.titleLink}
            >
              {mangaDetails.Manga.title}
            </Link>
            {` - ${mangaDetails.title}`}
          </h2>
          <div className={classes.buttonContainer}>
            <button className={classes.button} onClick={handleUserLibrary}>Ajouter à ma collection</button>
            <button className={classes.button} >Trouver ma librairie</button>
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
    </div>
  );
}

export default MangaDetails;
