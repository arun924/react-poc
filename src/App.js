import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './views/Home';
import AppNavbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
