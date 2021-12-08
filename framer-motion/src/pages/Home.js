import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={classes.container}
    >
      <h2>Framer Motion animation</h2>
      <motion.p variants={childVariants}>Child 1</motion.p>
      <motion.p variants={childVariants}>Child 2</motion.p>
      <Link to="/button">
        <motion.button
          variants={childVariants}
          whileHover={{ backgroundColor: '#000' }}
          transition={{ duration: 0.5 }}
          className={classes.button}
        >
          Go to Button Showcase
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
