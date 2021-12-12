import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './Button.module.css';

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={classes.container}>
      <AnimatePresence>
        {clicked && (
          <motion.h2 exit={{ opacity: 0 }}>This is my content.</motion.h2>
        )}
      </AnimatePresence>
      <motion.button className={classes.button} onClick={handleClick}>
        Hide and Seek
      </motion.button>
    </div>
  );
};

export default Button;
