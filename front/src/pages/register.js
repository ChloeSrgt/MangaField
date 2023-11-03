import React, { useState } from "react";
import axios from "axios";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "40px",
  },
  avatar: {
    backgroundColor: "#f50057",
    marginBottom: "16px",
  },
  form: {
    width: "100%",
    marginTop: "8px",
  },
  submit: {
    marginTop: "24px",
  },
}));

const Register = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    pseudo: "",
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
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Pseudo"
          name="pseudo" 
          value={formData.pseudo}
          onChange={handleChange}
        />
        <TextField
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
          color="primary"
          className={classes.submit}
        >
          S'inscrire
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
