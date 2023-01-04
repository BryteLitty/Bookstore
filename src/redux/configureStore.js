import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/books";
import categoryReducer from "./categories/categories";

const store = configureStore({
    reducer: {
        book: booksReducer,
        category: categoryReducer
    }
});

export default store;