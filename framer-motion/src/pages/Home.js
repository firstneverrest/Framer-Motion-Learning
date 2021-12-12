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
        delay: 0.5,
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
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

  const childVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const circleVariants = {
    circle: {
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      transition: {
        delay: 1,
        duration: 4,
        times: [0, 0.2, 0.5, 0.8, 1],
        // yoyo: Infinity,
        // repeat: Infinity,
        // repeatDelay: 1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.container}
    >
      <h2>Framer Motion animation</h2>
      <motion.p variants={childVariants}>content 1</motion.p>
      <motion.p variants={childVariants}>content 2</motion.p>
      <Link to="/button">
        <motion.button variants={childVariants}>Show Case Page</motion.button>
      </Link>
      <Link to="/logo">
        <motion.button variants={childVariants}>SVG Page</motion.button>
      </Link>
      <motion.div
        variants={circleVariants}
        animate="circle"
        className={classes.circle}
      ></motion.div>
    </motion.div>
  );
};

export default Home;
