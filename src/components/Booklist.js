import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Booklist = ({ books }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {books.length > 0 ? books.map((book) => (
        <div key={book.item_id}>
          <h1>{book.title}</h1>
          <p>{book.author}</p>

          <span>
            <button type="button" onClick={() => handleDelete(book.item_id)}>removeBook</button>
          </span>
        </div>
      )) : 'Oops! No books found'}
    </div>
  );
};

Booklist.defaultProps = { books: null };
Booklist.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })),
};

export default Booklist;
