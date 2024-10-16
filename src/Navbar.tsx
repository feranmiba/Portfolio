import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spider from './Image/spider.jpeg'

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
    document.body.classList.toggle('dark');
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`hidden md:block w-full ${isFixed ? 'fixed top-0 left-0 z-50' : ''} ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} shadow-2xl transition-all duration-300`}>
      <div className='flex justify-between items-center px-5 lg:px-24 py-3'>
        <div className='self-center flex gap-2'>
        <p className='w-[8%] lg:w-[5%] rounded-full'><img src={Spider} alt="" className='rounded-full' /></p>  
          <h1 className='font-poppin font-semibold self-center'> {"< Amiola_Dev />"}</h1>
        </div>

        <div className='font-poppin flex justify-around gap-5'>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")}>About</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")}>Contact</NavLink>
          <div className="toggle-container cursor-pointer" onClick={toggleDarkMode}>
            <div className={`toggle-icon ${darkMode ? 'dark' : 'light'}`}>
              {darkMode ? '🌙' : '☀️'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;


