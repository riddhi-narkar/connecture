import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Connecture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
