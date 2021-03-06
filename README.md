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

## Variants

Variants help creating animations that propagate throughout the DOM, and orchestrate those animations in a declarative way. It makes our code cleaner and be reusable.

```js
const Home = () => {
  const containerVariants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
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
```

## Orchestration

Orchestration can schedule the animation of parent and child component like delay and stagger.

```js
const Home = () => {
  const containerVariants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        duration: 1,
        when: 'beforeChildren', // child component will animate after parent complete animation
        staggerChildren: 0.5, // each child has delay 0.5 second before next child animates.
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
```

## Keyframe

Keyframe is used to animate through each value in sequence.

```js
const circleVariants = {
  circle: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    transition: {
      delay: 1,
      duration: 4,
      times: [0, 0.2, 0.5, 0.8, 1],
      // yoyo: Infinity, yoyo: 3
      repeat: Infinity,
      repeatDelay: 1,
    },
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
    <motion.div
      variants={circleVariants}
      animate="circle"
      className={classes.circle}
    ></motion.div>
  </motion.div>
);
```

## Animate Presence

Animate Presence allows components to animate out when they are removed from React tree (unmounted).

```js
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
```

## Animate Routes

Animate when changing routes with animate presence.
First, cover all routes with animate presence then use a hook from react router
which is called `useLocation` to help framer motion knows when to animate.

```js
// App.js
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Button from './pages/Button';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/button" component={Button} />
        <Route path="/" exact component={Home} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
```

After that, add exit property into your container component in each route.

## SVG animation

Framer Motion allows animating svg with motion.path

```js
import React from 'react';
import { motion } from 'framer-motion';
import classes from './Logo.module.css';

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};

const Logo = () => {
  return (
    <div className={classes.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <motion.path
          d="M14.4495 ..."
          fill="transparent"
          strokeWidth="0.5"
          stroke="#fff"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
        />
      </svg>
    </div>
  );
};

export default Logo;
```
