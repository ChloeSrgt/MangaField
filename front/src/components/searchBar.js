import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#0097B2",
    height: "45px",
  },
  searchResultsContainer: {
    position: "absolute",
    top: "5%",
    // left: 0,
    // right: 0,
    zIndex: 1000,
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    maxHeight: "300px",
    overflowY: "auto",
    borderRadius: "4px",
    width: "25%",
    marginLeft: "37.5%",
  },
  searchResultItem: {
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: "1px solid #f0f0f0",
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  },
  logo: {
    height: "100%",
    width: "auto",
    margin: "20px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  searchWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  searchContainer: {
    width: "25%",
  },
  search: {
    position: "relative",
    borderRadius: "19px",
    backgroundColor: "#f1f3f4",
    margin: "0",
    width: "100%",
  },
  searchIconWrapper: {
    width: "40px",
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    padding: "10px 10px 10px 40px",
    transition: "width 0.4s ease-in-out",
    width: "100%",
    "&:focus": {
      width: "100%",
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  icon: {
    margin: "10px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.length >= 2) {
      searchMangaVolumes(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const searchMangaVolumes = async (term) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/mangaVolume/search?term=${term}`
      );
      setSearchResults(response.data);
      console.log("searchResultats", response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche de manga volumes", error);
    }
  };

  const handleMenuOpen = (event) => {
    // Si l'utilisateur n'est pas connecté, pas le menu
    if (isLoggedIn()) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    handleMenuClose();
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/myProfil");
    handleMenuClose();
  };

  const handleLibraries = () => {
    navigate("/libraryMap");
    handleMenuClose();
  };

  const handleUserLibrary = () => {
    navigate("/userLibrary");
  };
  const handleHome = () => {
    navigate("/home");
  };

  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  const handleSearchResultClick = (mangaVolumeId) => {
    navigate(`/mangaDetails/${mangaVolumeId}`);
    setSearchResults([]);
  };

  return (
    <header className={classes.header}>
      <img
        src={logo}
        alt="Logo"
        className={classes.logo}
        onClick={handleHome}
      />
      <div className={classes.searchWrapper}>
        <div className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIconWrapper}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher…"
              classes={{ root: classes.inputRoot }}
              inputProps={{ "aria-label": "rechercher" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div className={classes.searchResultsContainer}>
        {searchResults.map((mangaVolume) => (
          <div
            key={mangaVolume.id}
            className={classes.searchResultItem}
            onClick={() => handleSearchResultClick(mangaVolume.id)}
          >
            {mangaVolume.Manga.title} - {mangaVolume.title}
          </div>
        ))}
      </div>
      <div className={classes.iconContainer}>
        <MenuBookIcon className={classes.icon} onClick={handleUserLibrary} />
        {isLoggedIn() && (
          <PermIdentityIcon className={classes.icon} onClick={handleMenuOpen} />
        )}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleProfile}>Mon profil</MenuItem>
          <MenuItem onClick={handleLibraries}>Mes librairies</MenuItem>
          <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default SearchBar;
