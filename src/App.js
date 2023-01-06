import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/pages/Categories';
import Books from './components/pages/Books';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
