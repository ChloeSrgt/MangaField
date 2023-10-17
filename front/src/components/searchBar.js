import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import logo from "../assets/logo.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#0097B2",
    height: "60px",
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
    width: "30%",
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
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
              classes={{
                root: classes.inputRoot,
              }}
              inputProps={{ "aria-label": "rechercher" }}
            />
          </div>
        </div>
      </div>
      <div className={classes.iconContainer}>
        <MenuBookIcon className={classes.icon} onClick={handleUserLibrary} />
        <PermIdentityIcon className={classes.icon} onClick={handleMenuOpen} />
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
