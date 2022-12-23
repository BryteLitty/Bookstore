import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/pages/Categories';
import Books from './components/pages/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
