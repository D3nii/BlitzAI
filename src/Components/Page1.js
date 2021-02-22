import React from "react";

import "../Style/Page1.css";

class Page1 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page1">
        <div id="page1content">
          <div id="main">
            <span style={{ color: "rgb(78, 83, 119)" }}>Image Annotation</span>{" "}
            <br /> for <br /> Computer Vision
          </div>
          <div id="leftover">
            We provide high quality food for your machine learning models <br />{" "}
            so that they grow healthy and fat.{" "}
          </div>
        </div>  
      </div>
    );
  }
}

export default Page1;
