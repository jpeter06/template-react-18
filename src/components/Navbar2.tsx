import React from "react";
import {  NavLink } from "react-router-dom";
import Clock from "./Clock";
import './Navbar2.scss';
 
const Navbar2: React.FC = () => {
    return (
    <nav>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/page1" >Page1</NavLink>
      <NavLink to="/weather" >Weather</NavLink>
      <NavLink to="/about">About</NavLink>
      <Clock clase="marginLeftAuto" origen="Navbar"/>
    </nav>
    )
}

export default Navbar2;