import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f4f7', 
    minHeight: '100vh',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
    padding: '40px',
    border: 'none',
    borderRadius: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 15px rgba(0,0,0,0.1)', 
    width: '70%', 
    transition: 'all 0.3s', 
    "&:hover": {
      transform: 'scale(1.02)',
      boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%', 
    background: '#f6f8fb',
    "&:focus": {
      borderColor: '#2E5BFF', 
    }
  },
  uploadButton: {
    marginTop: '15px',
    backgroundColor: '#2E5BFF', 
    "&:hover": {
      backgroundColor: '#2458d1', 
    }
  },
}));


const MyProfile = () => {
  const classes = useStyles();
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
    address: "", 
    pseudo: "", 
    profileImage: null,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfileData({ ...profileData, profileImage: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profileData);
  };

  return (
    <div className={classes.container}>
      <SearchBar />
      <div className={classes.formContainer}>
        {profileData.pseudo && <h3>Hello, {profileData.pseudo}!</h3>}
        
        <h2>Modifier votre profil</h2>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Nom"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Adresse"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Pseudo"
            name="pseudo" 
            value={profileData.pseudo}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.input}
            label="Bio"
            name="bio"
            multiline
            rows={4}
            value={profileData.bio}
            onChange={handleInputChange}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <Button
            className={classes.uploadButton}
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
          >
            Télécharger une photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Enregistrer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
