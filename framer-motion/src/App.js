import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Button from './pages/Button';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/button" component={Button} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
