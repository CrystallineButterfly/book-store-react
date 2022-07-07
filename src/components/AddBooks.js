import React from 'react';
import '../App.css';

function AddBooks() {
  return (
    <div>
      <h2>Add a New Book</h2>
      <ul>
        <li />
        <li />
        <li />
        <li />
      </ul>
      Title
      <input type="text" property="title" />
      Author
      <input type="text" property="author" />
      <button type="submit">Add Book</button>
    </div>
  );
}

export default AddBooks;
