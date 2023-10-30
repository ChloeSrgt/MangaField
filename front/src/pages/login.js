import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleCreateUser = () => {
        navigate("/createUser");
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
            
        try {
            const response = await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
    
            if (response.status !== 200) {
                throw new Error(data);
            }
            localStorage.setItem('token', data);
        } catch (error) {
            setError(error.message);
        }
    };    
    
    return (
        <div>
            <h2>Connexion</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button onClick={handleCreateUser}>Créer un compte</button>
                <div>
                    <button type="submit">Se connecter</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
