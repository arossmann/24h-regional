import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddStore from './components/AddStore'

function App() {
  return (
    <div id="main">
      <div>
        <NavBar />
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact>
          </Route>
          <Route path="/add" component={AddStore}>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
