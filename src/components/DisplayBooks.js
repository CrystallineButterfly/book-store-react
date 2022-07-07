import React from 'react';
import AddBooks from "./components/AddBooks";
import RemoveBook from "./components/RemoveBook";

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
