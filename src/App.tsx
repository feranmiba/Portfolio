import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeComponent from './Components/HomeComponent';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomeComponent />} />
        <Route path='/about' element={ <AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
