import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {
  const handleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        token: credentialResponse.credential,
      });
      console.log('Backend response:', res.data);
      // Save the JWT, set user, redirect, etc.
    } catch (err) {
      console.error('Login error', err);
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      <GoogleLogin onSuccess={handleLogin} onError={() => console.log('Login Failed')} />
    </div>
  );
}

export default App;
