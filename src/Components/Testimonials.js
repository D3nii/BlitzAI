import React from "react";

import "../Style/Testimonials.css";

class Testimonial extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="testimonial">
        <div id="TestimonialWriting">{this.props.message}</div>
        <cite id="testimonialName">
          <span>{this.props.name}</span>
          <span>{this.props.desig}</span>
        </cite>
      </div>
    );
  }
}

export default Testimonial;
