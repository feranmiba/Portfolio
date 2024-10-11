import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WordCyclerProps {
  words: string[];
  duration: number; // Duration to display each word
}

const WordCycler: React.FC<WordCyclerProps> = ({ words, duration }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length, duration]);

  const textVariants = {
    hidden: { opacity: 0.2, y: 20, scale: 0.8 },   // Start slightly lower
    visible: { opacity: 1, y: 0, scale: 1 },    // Original position
    exit: { opacity: 0, y: -20, scale:0.5 },      // Exit slightly higher
  };

  return (
    <div className='flex justify-center items-center h-[5vh] relative overflow-hidden'> {/* Center the text */}
      <AnimatePresence>
        <motion.h1
          key={currentWordIndex}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ 
            whiteSpace: 'nowrap', 
            maxWidth: '100%', 
            textAlign: "center", // Center text in the container
            position: 'absolute', // Ensure it doesn't affect layout
            left: '0%', 
            transform: 'translateX(-50%)' // Center the text
          }} 
        >
          {words[currentWordIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default WordCycler;



