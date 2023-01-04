const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial State
const initalState = [];

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    book,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state.push(action.payload),
      ];
    case REMOVE_BOOK:
      return {
        ...state.filter((book) => book.id === action.payload.id),
      };
    default:
      return state;
  }
};

export default booksReducer;
