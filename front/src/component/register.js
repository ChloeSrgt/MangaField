import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        avatarURL: ''
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/users/register', formData);
            setMessage('Inscription réussie! Vous pouvez maintenant vous connecter.');
        } catch (error) {
            setMessage('Erreur lors de l’inscription.');
        }
    };

    return (
        <div>
            <h2>Inscription</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Prénom :</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Nom :</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;
