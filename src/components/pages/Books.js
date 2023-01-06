import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Booklist from '../Booklist';
import AddBook from '../AddBook';
import { getBooks } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="booklist">
      <Booklist books={books} />
      <hr className="horizontal-divider" />
      <AddBook />
    </div>
  );
};

export default Books;
