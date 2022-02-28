import React from 'react';
import './App.scss';

import Home from './pages';
import About from './pages/about';
import Map from './components/Map/Map';
import Imprint from './pages/imprint';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Header />
        <Navbar />
      <div id="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='map' element={<Map />} />
        <Route path='imprint' element={<Imprint />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
