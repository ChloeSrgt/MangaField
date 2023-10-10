import { makeStyles } from "@mui/styles";
import React from "react";
import SearchBar from "../components/searchBar";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const LibraryMap = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SearchBar />
      <p>Ici on affiche une carte qui va retrouver toutes les librairies autour de chez toi</p>
    </div>
  );
};
export default LibraryMap;
