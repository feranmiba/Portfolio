import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <section className={`  ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} shadow-2xl`}>
      <div className='flex justify-between px-24 py-3'>
        <div className='self-center'>
          <h1 className='font-poppin font-semibold'>Amiola Demilade</h1>
        </div>

        <div className='font-poppin flex justify-around gap-5'>
            <NavLink to="/about">About</NavLink>
            <NavLink to="portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          <div className="toggle-container" onClick={toggleDarkMode}>
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
