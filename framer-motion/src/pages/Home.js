import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className={classes.container}
    >
      <h2>Framer Motion animation</h2>
      <Link to="/button">
        <motion.button
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
