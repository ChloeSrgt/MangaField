import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
  footer: {
    backgroundColor: "#067790",
    color: "white",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "30px",
  },
});

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.footer}>© MangaField</div>;
};

export default Footer;
