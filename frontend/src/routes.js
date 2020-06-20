import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}