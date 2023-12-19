import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "15%",
    minHeight: "100vh",
  },
  box: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: 50,
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  },
  avatar: {
    // margin: 1,
    backgroundColor: "#067790 !important", 
    // width: "90px",

  },
  textField: {
    margin: 'normal', 
  },
  submitButton: {
    backgroundColor: "#067790 !important", 
    color: "#fff !important", 
    '&:hover': {
      backgroundColor: "#056680 !important", 
    },
  },
  
  link: {
    cursor: "pointer",
    color: "#056680 !important",
  },
  errorText: {
    color: 'red', 
  },
});

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", { email, password });
      localStorage.setItem("token", response.data);
      navigate("/home");
    } catch (error: any) {
      setError(error.response ? error.response.data : "Erreur lors de la connexion");
    }
  };
  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <CssBaseline />
      <Grid container justifyContent="center" alignItems="center">
        <Box className={classes.box}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box mt={3} mb={1}>
              <Button type="submit" variant="contained" className={classes.submitButton}>
                Se connecter
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.link}>
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleRegister} className={classes.link}>
                  {"Pas de compte?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default Login;
