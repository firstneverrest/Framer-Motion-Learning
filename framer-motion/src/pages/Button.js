import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './Button.module.css';

const containerVariants = {
  visible: {
    opacity: 1,
    x: 100,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const contentVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Button = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <motion.div
      className={classes.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <AnimatePresence>
        {clicked && (
          <motion.h2
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={contentVariants}
          >
            This is my content.
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.button className={classes.button} onClick={handleClick}>
        Hide and Seek
      </motion.button>
    </motion.div>
  );
};

export default Button;
