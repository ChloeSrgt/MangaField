import { makeStyles } from "@mui/styles";
import React from "react";
import SearchBar from "../components/searchBar";
import planville from "../assets/planville.png";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  plan: {
    maxWidth: "60%",
    maxHeight: "60vh",
    width: "auto",
    height: "auto",
    margin: "auto",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "3px solid #333",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

const LibraryMap = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SearchBar />
      <img src={planville} alt="planville" className={classes.plan} />
    </div>
  );
};
export default LibraryMap;
