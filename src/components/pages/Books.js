import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from '../Booklist';
import AddBook from '../AddBook';

const Books = () => {
  const books = useSelector((state) => state.book);

  return (
    <div>
      <Booklist books={books} />
      <AddBook />
    </div>
  );
};

export default Books;
