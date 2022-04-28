import React, { Component, createRef } from "react";
import {  NavLink } from "react-router-dom";
import './Navbar.scss';

export default class Navbar extends Component {

  wrapperRef = createRef<HTMLUListElement>();
  state = {checked:false};

  constructor(props:any) {
    super(props);
    this.showHide = this.showHide.bind(this);
  }

  showHide(){
    this.setState({ checked:!this.state.checked });
  }
  /**
  handleClickOutside(event: MouseEvent) {
    const node = this.wrapperRef.current;
    if (this.state.checked && node &&  event.target instanceof Node && !node.contains(event.target)) {
      this.setState({ checked:false });
      event.preventDefault();
    }
  }
  
   */

  render() {
    return(
      <nav className="navbar" >
      <div className="navbar-container container">
          <input type="checkbox"  onChange={()=>{console.log("onChange2")}} checked={this.state.checked} />
          <div className="hamburger-lines" onClick={this.showHide}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items" ref={this.wrapperRef}>
            <li><NavLink to="/" onClick={this.showHide}>Home</NavLink></li>
            <li><NavLink to="/page1"  onClick={this.showHide}>Page1</NavLink></li>
            <li><NavLink to="/weather"  onClick={this.showHide}>Weather</NavLink></li>
            <li><NavLink to="/about" onClick={this.showHide}>About</NavLink></li>
          </ul>
          <div className="fillAll" onClick={this.showHide}></div>
      </div>
    </nav>
    )
  }
}
