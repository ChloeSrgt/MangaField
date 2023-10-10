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

const UserLibrary = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SearchBar />
      <p>Affiche ma collection de manga</p>
    </div>
  );
};
export default UserLibrary;
