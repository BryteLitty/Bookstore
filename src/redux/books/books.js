import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

// Initial State
const initalState = [];
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kRkPDKKG834Qae4xRRhz/books';

// Action Creators
export const addBook = createAsyncThunk(ADD_BOOK, async (data) => {
  await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return data;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${baseURL}/${id}`);
  return id;
});

export const getBooks = createAsyncThunk(GET_BOOK, async () => {
  const response = await axios.get(baseURL)
    .then((data) => {
      const books = Object.entries(data.data).map(([id, object]) => ({
        item_id: id,
        ...object[0],
      }));
      return books;
    })
    .catch((err) => err);
  return response;
});

const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [
        ...state, action.payload,
      ];
    case `${REMOVE_BOOK}/fulfilled`:
      return [
        ...state.filter((book) => book.item_id !== action.payload),
      ];

    case `${GET_BOOK}/fulfilled`:
      return [
        ...state, ...action.payload,
      ];
    default:
      return state;
  }
};

export default booksReducer;
