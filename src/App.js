import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Catergories from './redux/catergories/Catergories';
import DisplayBooks from './components/DisplayBooks';

function BookStore() {
  return (
    <div>
      <h1>Book Store</h1>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/catergories">Catergories</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/books" element={<DisplayBooks />} />
        <Route path="/catergories" element={<Catergories />} />
      </Routes>
    </div>
  );
}

export default BookStore;
