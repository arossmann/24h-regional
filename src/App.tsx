import React from 'react';
import './App.scss';
import Home from './pages';
import About from './pages/about';
import Map from './pages/map';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/map' component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
