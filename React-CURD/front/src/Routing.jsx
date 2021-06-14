import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/home/container/index';
import { Register } from './components/pages/register/container/index';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
