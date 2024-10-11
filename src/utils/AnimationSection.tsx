import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  animationType: 'fade' | 'slide' | 'zoom' | 'right' | 'left';
}

const AnimatedSection: React.FC<SectionProps> = ({ children, animationType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20, x: animationType === 'right' ? 20 : animationType === 'left' ? -20 : 0, scale: animationType === 'zoom' ? 0 : 1 },
    visible: animationType === 'fade' ? { opacity: 1 } : animationType === 'slide' ? { opacity: 1, y: 0 } : animationType === 'zoom' ? { scale: 1, opacity: 1 } : animationType === 'right' ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 1.5 }} 
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection