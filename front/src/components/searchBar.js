import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { InputBase, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import axios from "axios";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#067790",
    height: "45px",
    width: "100%",
  },
  searchResultsContainer: {
    position: "absolute",
    top: "9%", 
    left: "50%",
    transform: "translateX(-50%)", 
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    width: "auto",
    maxWidth: "400px", 
    maxHeight: "400px",
    overflowY: "auto",
    zIndex: 1000,
  },
  searchResultItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderBottom: "1px solid #f0f0f0",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#f7f7f7",
    },
  },
  searchResultItemImage: {
    marginRight: "10px",
    width: "60px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: {
    height: "auto",
    width: "200px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  searchWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    width: "100%", 
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    width: "30%", 
    "@media (max-width: 768px)": {
      width: "80%", 
    },
    "@media (max-width: 480px)": {
      width: "95%", 
    },
  },
  search: {
    position: "relative",
    borderRadius: "19px",
    backgroundColor: "#f1f3f4",
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
  const [anchorEl, setAnchorEl] = useState(null);
  const searchContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleLoginRedirect = () => {
    navigate("/login");
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
    <header className={classes.header} ref={searchContainerRef}>
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
            <img
              src={mangaVolume.image}
              alt={`${mangaVolume.Manga.title} cover`}
              className={classes.searchResultItemImage}
            />
            <span>
              {mangaVolume.Manga.title} - {mangaVolume.title}
            </span>
          </div>
        ))}
      </div>

      <div className={classes.iconContainer}>
      {isLoggedIn() ? (
          <>
            <MenuBookIcon
              className={classes.icon}
              onClick={handleUserLibrary}
            />
            <PermIdentityIcon
              className={classes.icon}
              onClick={handleMenuOpen}
            />
          </>
        ) : (
          <PermIdentityIcon
            className={classes.icon}
            onClick={handleLoginRedirect}
          />
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
