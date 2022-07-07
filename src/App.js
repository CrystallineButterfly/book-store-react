import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import RemoveBook from './components/RemoveBook';
import Catergories from './components/Catergories';
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
      <AddBooks />
      <RemoveBook />
    </div>
  );
}

export default BookStore;
