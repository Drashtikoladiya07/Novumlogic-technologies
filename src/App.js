import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/home/home";
import Navbar from './componets/navbar/navbar';
import About from './componets/home/about';
import How from './componets/home/how'
import Portfolio from './componets/home/portfolio';
import Career from './componets/home/career';
import Contact from './componets/home/contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/How" element={<How />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;