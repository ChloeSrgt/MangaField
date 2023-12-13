import React, { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "8%",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    color: "black",
  },
  avatar: {
    backgroundColor: "#056680 !important",
    marginBottom: "16px",
    width: "70px",
    height: "70px",
  },
  form: {
    width: "100%",
    marginTop: "16px",
  },
  submit: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: "#067790 !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "#056680 !important",
    },
  },
  textField: {
    marginBottom: "16px",
    "& label.Mui-focused": {
      color: "#067790",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#067790",
    },
  },
  message: {
    marginTop: "16px",
    color: "#067790",
    fontWeight: "bold",
  },
  backButton: {
    color: "#056680 !important",
    position: "absolute",
    top: "0",
    right: "50%",
  },
});

const Register = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatarURL: "",
  });
  const [message, setMessage] = useState("");

  const handleBack = () => {
    navigate("/login");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      setMessage("Inscription réussie! Vous pouvez maintenant vous connecter.");
      navigate("/login");
    } catch (error) {
      setMessage("Erreur lors de l’inscription.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper className={classes.container}>
        <IconButton onClick={handleBack} className={classes.backButton}>
          <ArrowBackIcon />
        </IconButton>
        <Avatar className={classes.avatar}>U</Avatar>
        <Typography component="h1" variant="h5">
          Création de compte
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nom d'utilisateur"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nom de famille"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Mot de passe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            fullWidth
            label="URL de l'avatar"
            name="avatarURL"
            value={formData.avatarURL}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            S'inscrire
          </Button>
        </form>
        {message && (
          <Typography variant="body2" className={classes.message}>
            {message}
          </Typography>
        )}
      </Paper>
    </div>
  );
};

export default Register;
