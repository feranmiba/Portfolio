import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spider from './Image/spider.jpeg'
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function MobileNav() {
  const [darkMode, setDarkMode] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <section className={` md:hidden w-full ${isFixed ? 'fixed top-0 left-0 z-50' : ''} ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} shadow-2xl transition-all duration-300`}>
      <div className='flex justify-between items-center px-5 lg:px-24 py-3'>
        <div className='self-center flex gap-2'>
        <p className='w-[8%] lg:w-[5%] rounded-full'><img src={Spider} alt="" className='rounded-full' /></p>  
          <h1 className='font-poppin font-semibold self-center'> {"< Amiola_Dev />"}</h1>
        </div>

        <div className='font-poppin flex justify-around gap-5'>
        <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className='cursor-pointer self-center'
            >
              {menuOpen ? <FaTimes  /> : <FaBars  />}
            </motion.div>
          <div className="toggle-container cursor-pointer" onClick={toggleDarkMode}>
            <div className={`toggle-icon ${darkMode ? 'dark' : 'light'}`}>
              {darkMode ? '🌙' : '☀️'}
            </div>
          </div>
        </div>

        <AnimatePresence>
            {menuOpen && (
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
  transition={{ duration: 0.3 }}
  exit={{opacity:0, y:20}}
  className={`fixed top-10 bg-[#fef9f9] dark:bg-[#282628] py-10 pb-5 z-50 left-0 w-full shadow-lg ${menuOpen ? 'block' : 'hidden'}`}
>
    <div className=' flex flex-col items-center gap-4'>
    <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")} onClick={toggleMenu}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")} onClick={toggleMenu}>About</NavLink>
<NavLink to="/portfolio" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")} onClick={toggleMenu}>Portfolio</NavLink>
<NavLink to="/contact" className={({ isActive }) => (isActive ? "text-[#338f89]" : "")} onClick={toggleMenu}>Contact</NavLink>
    </div>
    </motion.div>
            )

            }
      
            </AnimatePresence>

      </div>
    </section>
  );
}

export default MobileNav;