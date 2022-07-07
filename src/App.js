import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import Authors from './components/Authors';
import RemoveBook from './components/RemoveBook';

function BookStore() {
  return (
    <div>
      <h1>Book Store</h1>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route exact path="/books" component={AddBooks} />
        <Route path="/authors" component={Authors} />
      </Routes>
      <AddBooks />
      <RemoveBook />
    </div>
  );
}

export default BookStore;
