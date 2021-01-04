import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Board from './components/Board';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route component={Home} path="/"exact />
          <Route component={Board} path="/board" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
