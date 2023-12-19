import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    top: "1px",
    left: "15px",
    backgroundColor: "rgba(295, 255, 255, 0.7)",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
  menuBookIcon: {
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
    display: "inline-block",
    transition: "background-color 0.4s, color 0.4s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#067790 !important",
      color: "white !important",
    },
  },
  errorPopup: {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "9999",
  },
  successPopup: {
    position: "fixed",
    top: "10px",
    right: "20px",
    backgroundColor: "#123f55",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "9999",
  },
  contentContainer: { 
    textAlign: "left",
  },
}));

interface MangaVolumeCardProps {
  mangaVolume: {
    id: number;
    image: string;
    title: string;
    Manga: {
      title: string;
      author: string;
    };
  };
  onCardClick: (id: number) => void;
  actionButton: React.ReactNode;
}

const MangaVolumeCard: React.FC<MangaVolumeCardProps> = ({
  mangaVolume,
  onCardClick,
  actionButton,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.mangaVolumeCard}
      onClick={() => onCardClick(mangaVolume.id)}
    >
      <CardMedia
        image={mangaVolume.image}
        title={mangaVolume.title}
        className={classes.mangaVolumeImage}
      />
      <CardContent>
        <Typography className={classes.mangaVolumeTitle}>
          {mangaVolume.Manga.title}
        </Typography>
        <Typography className={classes.mangaTitle}>
          - {mangaVolume.title}
        </Typography>
        <Typography className={classes.mangaAuthor}>
          {mangaVolume.Manga.author}
        </Typography>
      </CardContent>
      {actionButton}
    </div>
  );
};

export default MangaVolumeCard;