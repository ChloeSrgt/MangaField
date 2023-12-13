import React, { createContext, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import LibraryMap from "./pages/libraryMap";
import Login from "./pages/login";
import MyProfil from "./pages/myProfil";
import Register from "./pages/register";
import UserLibrary from "./pages/userLibrary";
import MangaDetails from "./pages/mangaDetails";
import AllMangas from "./pages/allMangas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { createTheme, useTheme } from "@mui/material/styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness2";
import { IconButton } from "@mui/material";

export const DarkModeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#303030' : '#f2f2f2',
      },
    },
  }), [darkMode]);

  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      minWidth: '100vw',
      overflowX: 'hidden',
    },
  });
  const classes = useStyles();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <Routes>
              <Route path="/libraryMap" element={<LibraryMap />} />
              <Route path="/mangaDetails/:id" element={<MangaDetails />} />
              <Route path="/myProfil" element={<MyProfil />} />
              <Route path="/mangaDetail/:id" element={MangaDetails} />
              <Route path="/userLibrary" element={<UserLibrary />} />
              <Route path="/mangaVolume/:id" element={<MangaDetails />} />
              <Route path="/manga/:mangaId" element={<AllMangas />} />
              <Route
                path="/"
                element={
                  isLoggedIn() ? (
                    <Navigate replace to="/home" />
                  ) : (
                    <Navigate replace to="/login" />
                  )
                }
              />
              <Route path="/home" element={<Home />} />
              <Route
                path="/login"
                element={
                  !isLoggedIn() ? <Login /> : <Navigate replace to="/home" />
                }
              />
              <Route
                path="/register"
                element={
                  !isLoggedIn() ? <Register /> : <Navigate replace to="/home" />
                }
              />
              <Route
                path="*"
                element={
                  <Navigate replace to={isLoggedIn() ? "/home" : "/login"} />
                }
              />
            </Routes>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Router>
        </div>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default App;
