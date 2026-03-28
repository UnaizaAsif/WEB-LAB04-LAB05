import { useState } from 'react'
import reactLogo from './images/react.svg'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import './App.css'

function App() {
  return (
    <div className="page-container">
      <Navbar />

      <div className="app-container">
        <img src={reactLogo} alt="React Logo" className="app-logo"/>
        <Hero />
      </div>

      <Footer />
    </div>
  );

}

export default App;
