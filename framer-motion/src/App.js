import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Button from './pages/Button';
import Logo from './pages/Logo';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/button" component={Button} />
        <Route path="/logo" component={Logo} />
        <Route path="/" exact component={Home} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
