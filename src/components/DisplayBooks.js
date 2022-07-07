import React from 'react';
import AddBooks from './AddBooks';
import RemoveBook from './RemoveBook';

export default function DisplayBooks() {
  return (
    <div>
      <ul>
        <li>The Immortality Key: By Brian C Muraresku</li>
      </ul>
      <AddBooks />
      <RemoveBook />
    </div>
  );
}
