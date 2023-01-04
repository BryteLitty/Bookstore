import { v4 as uuidv4 } from 'uuid'

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial State
const initalState = [
  { id: uuidv4(), title: 'Think and Grow Rich', author: 'Napoleon Hill' },
  { id: uuidv4(), title: 'I a Here to Stay', author: 'Addison Blessing' },
  { id: uuidv4(), title: 'Two of us Forerver', author: 'Litty Bryte' }
];

// Action Creators
export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: {
      book,
    }
  }
}

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    }
  }
}

const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload.book
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload.id)
      ];
    default:
      return state;
  }
};

export default booksReducer;
