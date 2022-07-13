import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <h1>BookStore</h1>
      <Link to="/">Books</Link>
      <Link to="/catergories">Catergories</Link>
    </nav>
  </div>
);

export default Navbar;
