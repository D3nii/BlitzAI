import React from "react";

import "../Style/Page3Cards.css";

class Page3Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page3_cards">
        <h2 className="page3_heading">{this.props.heading}</h2>
        <p id="page3_body">{this.props.body}</p>
      </div>
    );
  }
}

export default Page3Cards;
