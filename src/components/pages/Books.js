import React from 'react';
import Book from '../Book';
import AddBook from '../AddBook';

const Books = () => (
  <div>
    <Book title="Think and Grow Rich" author="Napoleon Hill" />
    <AddBook />
  </div>
);

export default Books;
