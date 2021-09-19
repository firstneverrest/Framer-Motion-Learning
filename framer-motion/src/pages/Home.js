import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className={classes.container}
    >
      <h2>Framer Motion animation</h2>
      <Link to="/button">
        <motion.button className={classes.button}>
          Go to Button Showcase
        </motion.button>
      </Link>
      <motion.p
        initial={{ x: '-50vw' }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: 'spring',
        }}
      >
        transition
      </motion.p>
    </motion.div>
  );
};

export default Home;
