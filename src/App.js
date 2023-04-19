import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Questions } from './pages/';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Questions />}></Route>
    </Routes>
  );
}
