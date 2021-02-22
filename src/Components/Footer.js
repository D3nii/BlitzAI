import React from "react";
import { SiFacebook, SiGmail, SiLinkedin } from "react-icons/si";

import Pop from "./Popup";
import Policy from "./Policy";

import "../Style/Footer.css";

class Footer extends React.Component {
  constructor() {
    super();
  }

  displayPopup() {
    var pop = document.getElementById("popup");
    pop.classList.toggle("active");
    document.getElementById("popup").style.display = "block";
  }

  render() {
    return (
      <div id="Footer">
        <br />
        <div id="col">
          <div id="footerMain">
            <h1>Masti keriyan?</h1>
            <p>
              Masti keriyan is an image annotation company forn computer vision
              projects.{" "}
            </p>
            <p>+92 300 6405343</p>
            <span>Get in touch</span>
            <a id="Links" href="/">
              <SiFacebook />
            </a>
            <a id="Links" href="/">
              <SiLinkedin />
            </a>
            <a id="Links" href={"mailto:" + "EMAIL"}>
              <SiGmail />
            </a>
          </div>

          <div id="col1" className="Not_mobile">
            <h2>Solutions</h2>
            <a href="#main2">Lines</a>
            <a href="#main2">Bounding Boxes</a>
            <a href="#main2">Points</a>
            <a href="#main2">Polygons</a>
            <a href="#main2">Classification</a>
            <a href="#main2">Tracking</a>
          </div>

          <div id="col1" className="Not_mobile">
            <h2>Core Values</h2>
            <a href="#main3">Quality</a>
            <a href="#main3">Security & Privacy</a>
            <a href="#main3">Timely Deliveries</a>
            <a href="#main3">Lowest Prices</a>
            <a href="#main3">Speed</a>
          </div>

          <div id="col1">
            <h2>Know Us more</h2>
            <a href="/">About Us</a>
          </div>

          <div id="col1">
            <h2>Join Us</h2>
            <a href="/">Careers</a>
          </div>

          <div id="col1">
            <h2>Legals</h2>
            <a>
              <Pop head="Terms of Services" />
            </a>
            <a>
              <Policy head1="Privacy Policy" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
