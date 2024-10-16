import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeComponent from './Components/HomeComponent';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import MobileNav from './MobileNav';



function App() {
  return (
    <div className='dark:bg-[#252025] dark:text-white'>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route path='/' element={ <HomeComponent />} />
        <Route path='/about' element={ <AboutMe />} />
        <Route path='/portfolio' element={ <Portfolio />} />  
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </div>
  );
}

export default App;
