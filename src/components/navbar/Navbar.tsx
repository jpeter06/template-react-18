import React, { Component, createRef } from "react";
import {  NavLink } from "react-router-dom";
import './Navbar.scss';

export default class Navbar extends Component {

  wrapperRef = createRef<HTMLElement>();
  state = {checked:false};

  constructor(props:any) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.showHide = this.showHide.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  showHide(){
    this.setState({ checked:!this.state.checked });
  }
  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event: MouseEvent) {
    const node = this.wrapperRef.current;
    if (this.state.checked && node &&  event.target instanceof Node && !node.contains(event.target)) {
      this.setState({ checked:false });
      event.preventDefault();
    }
  }

  render() {
    return(
      <nav className="navbar" ref={this.wrapperRef}>
      <div className="navbar-container container">
          <input type="checkbox"  onChange={()=>{console.log("onChange2")}} checked={this.state.checked} />
          <div className="hamburger-lines" onClick={this.showHide}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><NavLink to="/" onClick={this.showHide}>Home</NavLink></li>
            <li><NavLink to="/page1"  onClick={this.showHide}>Page1</NavLink></li>
            <li><NavLink to="/weather"  onClick={this.showHide}>Weather</NavLink></li>
            <li><NavLink to="/about" onClick={this.showHide}>About</NavLink></li>
          </ul>
      </div>
    </nav>
    )
  }
}
