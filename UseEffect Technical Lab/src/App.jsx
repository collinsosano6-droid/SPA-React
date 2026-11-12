import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userName, setuserName] = useState("Guest")

  useEffect(() => {
    document.title = `Welcome, ${userName}`
  }, [userName]);

  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) = setuserName(e.target.value)}
      />
    </div>

  )


}