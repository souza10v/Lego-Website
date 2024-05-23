// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Sections />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
