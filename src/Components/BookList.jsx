import React from 'react';
import Book from './Book';
// import { useSelector} from 'react-redux';

function BookList() {
  return (
    <div>
      <Book
        key={Book.item_id}
        id={Book.item_id}
        title={Book.title}
        author={Book.author}
      />
    </div>
  );
}

export default BookList;
