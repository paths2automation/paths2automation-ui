import React, { useState } from 'react';
import '../css/Login.css'; // Import your CSS file for styling
import {useNavigate } from "react-router-dom";
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    if (email === 'prabhu.singh79@gmail.com' && password === 'password') {
      localStorage.setItem('isAuthenticated', true);
      navigate('layout');
      
    } else {
      localStorage.setItem('isAuthenticated', false);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
