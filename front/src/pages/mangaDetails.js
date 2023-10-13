import { makeStyles } from "@mui/styles";
import SearchBar from "../components/searchBar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function MangaDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const [mangaDetails, setMangaDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/mangaVolume/${id}`).then((response) => {
      setMangaDetails(response.data);
    });
  }, [id]);

  if (!mangaDetails) return <div>ça charge</div>;

  return (
    <div className={classes.container}>
      <SearchBar />
      <div style={{ display: "flex", padding: "20px" }}>
        <img
          src={mangaDetails.image}
          alt={mangaDetails.title}
          style={{ width: "300px", marginRight: "20px" }}
        />
        <div>
          <h2>{`${mangaDetails.Manga.title} - ${mangaDetails.title}`}</h2>
          <p>{mangaDetails.description}</p>
          <p>
            <strong>Date de sortie:</strong>
            {new Date(mangaDetails.releaseDate).toLocaleDateString()}
          </p>
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
