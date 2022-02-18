import React from 'react';
import './App.scss';

import Home from './pages';
import About from './pages/about';
import Map from './components/Map/Map';
import Imprint from './pages/imprint';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Header />
      {/*<Navigation />*/}
      <Navbar />
      <div id="container">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/map' component={Map} />
        <Route path='/imprint' component={Imprint} />
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
