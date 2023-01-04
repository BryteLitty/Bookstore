import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

/*eslint-disable */
const Booklist = ({ books }) => {
  
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id))
  }

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <p>{book.author}</p>

          <span>
            <button type="button" onClick={() => handleDelete(book.id)}>removeBook</button>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Booklist;
