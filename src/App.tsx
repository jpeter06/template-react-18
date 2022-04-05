import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/page1" element={<Page1/>} />        
        <Route path="*" element={<NotFound/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;