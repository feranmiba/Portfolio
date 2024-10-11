import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeComponent from './Components/HomeComponent';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomeComponent/ >} />
      </Routes>
    </div>
  );
}

export default App;
