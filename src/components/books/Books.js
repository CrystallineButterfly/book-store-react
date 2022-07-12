import { useSelector } from 'react-redux';
import Book from './book';
import Addbook from './AddBooks';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            bookId={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Addbook />
    </>
  );
}

export default Books;
