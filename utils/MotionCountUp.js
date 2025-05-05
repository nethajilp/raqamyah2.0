"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCount = ({ number, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stepTime = duration * 1000 / number;  // Adjust step time based on duration and number
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < number) {
          return prev + 1;
        } else {
          clearInterval(timer);  // Stop the timer when the count reaches the target number
          return prev;
        }
      });
    }, stepTime);

    return () => clearInterval(timer);  // Cleanup interval when component unmounts
  }, [number, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        key={count}
        initial={{ count: 0 }}
        animate={{ count }}
        transition={{ duration, ease: 'easeOut' }}
      >
        {({ count }) => Math.floor(count)}  {/* Interpolate the count value smoothly */}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedCount;
