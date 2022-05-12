import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.scss";
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Weather2 from './pages/weather/Weather';
import background from './images/malaga.jpg';

const App: React.FC = () => {
  return (   
    <BrowserRouter>
      <div className="root" style={{ backgroundImage:  `url(${require("./images/malaga.jpg")})` }}>
        <Navbar />
        <div className="navspace"></div>
        <Routes>
          <Route path="" element={<Weather2/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/weather" element={<Weather2/>} />        
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      
  </BrowserRouter>
  );
}



console.log("INIT!!!")

export default App;