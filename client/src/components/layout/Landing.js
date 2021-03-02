import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div>
      <h1>Apsit Hub</h1>
      <div>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
