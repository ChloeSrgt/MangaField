import React, { useState } from 'react';
import { Button, TextField, Paper, Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Navigate, useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '40px',
  },
  avatar: {
    backgroundColor: '#f50057',
    marginBottom: '16px',
  },
  form: {
    width: '100%',
    marginTop: '8px',
  },
  submit: {
    marginTop: '24px',
  },
}));

const CreateUser = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatarURL: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        localStorage.setItem('token', data);
        navigate('/login');
      } else {
        throw new Error(data.message || "Erreur lors de l'enregistrement");
      }
    } catch (error) {
      console.error('Erreur:', error.message);
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
          label="Nom d'utilisateur"
          name="userName"
          value={formData.userName}
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
}

export default CreateUser;