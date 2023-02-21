import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

function RouterNav() {
  return (
    <>
      <BrowserRouter className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterNav;
