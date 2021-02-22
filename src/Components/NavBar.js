import React from "react";
import "../Style/NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navBar">
        <span id="companyName">
          Masti keriyan?
        </span>
        <a href="#main2">
          Annotation
        </a>
        <a href="#Testimonial">
          Testimonials
        </a>
        <span className="navBar">About us</span>
      </div>
    );
  }
}

export default NavBar;
