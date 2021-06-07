import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/home/container/index';
import { Register } from './components/pages/register/container/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
