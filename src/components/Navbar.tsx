import React from "react";
import { Link, NavLink } from "react-router-dom";
import Clock from "./Clock";
import './Navbar.scss';
 
const Navbar: React.FC = () => {
    return (
    <nav>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/page1" >Page1</NavLink>
      <NavLink to="/about">About</NavLink>
      <Clock origen="Navbar"/>
    </nav>
    )
}

export default Navbar;