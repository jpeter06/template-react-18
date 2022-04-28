import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.scss";
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import NotFound from './pages/NotFound';
import Weather from './pages/weather/Weather';
import Weather2 from './pages/weather2/Weather2';

const App: React.FC = () => {
  return (   
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/page1" element={<Page1/>} />  
        <Route path="/weather" element={<Weather/>} />   
        <Route path="/weather2" element={<Weather2/>} />        
        <Route path="*" element={<NotFound/>} />
      </Routes>
  </BrowserRouter>
  );
}



console.log("INIT!!!")

export default App;