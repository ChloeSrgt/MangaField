import { makeStyles } from "@mui/styles";
import React from "react";
import SearchBar from "../components/searchBar";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}));

const MyProfil = () => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
      <SearchBar />
      <p>Ici modifie tout ton profil</p>
    </div>
  );
};
export default MyProfil;
