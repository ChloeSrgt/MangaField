import React, { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "40px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  avatar: {
    backgroundColor: "#4caf50",
    marginBottom: "16px",
    width: "80px",
    height: "80px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: "16px",
  },
  submit: {
    margin: "24px 0",
    backgroundColor: "#f50057",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#c51162",
    },
  },
  textField: {
    marginBottom: "16px",
  },
  message: {
    marginTop: "16px",
    color: "#4caf50",
    fontWeight: "bold",
  },
}));



const Register = () => {
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
    } catch (error) {
      setMessage("Erreur lors de l’inscription.");
    }
  };

  return (
    <Paper className={classes.container}>
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
  );
};

export default Register;
