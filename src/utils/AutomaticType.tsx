import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AutomatictypeProps {
  text: string;
  speed: number;
}

const Automatictype: React.FC<AutomatictypeProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout; 

    const updateText = (index: number) => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        timeoutId = setTimeout(() => updateText(index + 1), speed);
      }
    };

    updateText(0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.4,
      }}
    >
      {displayText}
    </motion.div>
  );
};

export default Automatictype;
