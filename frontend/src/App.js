import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => console.log(res.data))
      .catch(err => console.error('Error fetching API:', err));
  }, []);

  return (
    <div>
      <h1>Welcome to the Plated</h1>
      <p>Check your browser console to see the API response.</p>
    </div>
  );
}

export default App;
