import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <Link className="logo" to="/">Math Magicians</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
    </div>
  );
}

export default Navbar;
