import React from "react";

import "../Style/Page2Cards.css";

class Page2Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page2_1">
        <div id="main2_1">{this.props.heading}</div>
        <div id="leftover2_1">{this.props.body}</div>
      </div>
    );
  }
}

export default Page2Cards;
