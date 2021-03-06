import React from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book';

export class BookList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { books } = this.props;
    return (
      books.map((book) => <Book key={book.id} book={book} />)
    );
  }
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookList;
