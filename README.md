# Framer Motion Learning

Framer Motion is a production-ready motion library for React which help creating great animation in your React application. [You can visit official website for more information](https://www.framer.com/motion/).

## Installation

1. Install with npm

```
npm install framer-motion
```

2. Import motion to use

```js
import { motion } from 'framer-motion';
```

3. Start animate!

## Basic Usage

```js
import React from 'react';
import classes from './Home.module.css';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className={classes.container}>
      {/* change color from black to green animation */}
      <motion.h2 animate={{ color: '#04aa6d' }}>Home Page</motion.h2>
    </div>
  );
};

export default Home;
```

## Framer motion properties

### 1. animate

animate set the end point of the animation by using CSS properties.

### 2. initial

initial set the start point of the animation by using CSS properties.

```js
<motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1, color: '#4B3869' }}>
  Home Page
</motion.h2>
```

### 3. transition

transition control delay and timing of animation.

- delay - make the animation start slower
- duration - define the animated duration

```js
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
</motion.div>
```

## Position Animation

Animate from start position to end position with animation types: spring (bounce), tween (not bounce), keyframes, etc.

```js
<motion.p
  initial={{ x: '-50vw' }}
  animate={{ x: 0 }}
  transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 50 }}
>
  transition
</motion.p>
```

If the type is `string`, you can add `stiffness` to modify bouncing.

## Hover animation

```js
<motion.button
  whileHover={{ backgroundColor: '#000' }}
  transition={{ duration: 0.5 }}
  className={classes.button}
>
  Go to Button Showcase
</motion.button>
```
