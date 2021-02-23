import React from "react";

import "../Style/Page2.css";

import { BsBoundingBox } from "react-icons/bs";
import { AiOutlineFall } from "react-icons/ai";
import { IoIosContract } from "react-icons/io";
import { VscSymbolClass } from "react-icons/vsc";
import { GiThreePointedShuriken } from "react-icons/gi";
import { BiShapePolygon } from "react-icons/bi";

let temporary = 0;
var temporary2 = "back1";

const moveSliderPointerH = (hor) => {
  let temporary = document.getElementById(temporary2);

  temporary.style.width = hor + "px";

  temporary = document.getElementById("slider2");

  if (hor >= 0 && hor < 500) temporary.style.marginLeft = hor + "px";
}; //Controlling the horizontal movement

const moveSliderPointerHelper = (e) => {
  moveSliderPointerH(e.clientX - window.screen.width / 10);
};

const first = () => {
  temporary2 = "back1";
  document.getElementById("img1").style.display = "block";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img4").style.display = "none";
  document.getElementById("img5").style.display = "none";
  document.getElementById("img6").style.display = "none";
};

const second = () => {
  temporary2 = "back2";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img4").style.display = "none";
  document.getElementById("img5").style.display = "none";
  document.getElementById("img6").style.display = "none";
};

const third = () => {
  temporary2 = "back3";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "block";
  document.getElementById("img4").style.display = "none";
  document.getElementById("img5").style.display = "none";
  document.getElementById("img6").style.display = "none";
};

const fourth = () => {
  temporary2 = "back4";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img4").style.display = "block";
  document.getElementById("img5").style.display = "none";
  document.getElementById("img6").style.display = "none";
};
const fifth = () => {
  temporary2 = "back5";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img4").style.display = "none";
  document.getElementById("img5").style.display = "block";
  document.getElementById("img6").style.display = "none";
};

const sixth = () => {
  temporary2 = "back6";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img4").style.display = "none";
  document.getElementById("img5").style.display = "none";
  document.getElementById("img6").style.display = "block";
};

class Page2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section id="page2">
        <h1 id="main2">Services We Provide</h1>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <div id="slider">
            <div className="images">
              <div id="img1">
                <div id="back1"></div>
                <div id="front1"></div>
              </div>

              <div id="img2">
                <div id="back2"></div>
                <div id="front2"></div>
              </div>

              <div id="img3">
                <div id="back3"></div>
                <div id="front3"></div>
              </div>

              <div id="img4">
                <div id="back4"></div>
                <div id="front4"></div>
              </div>

              <div id="img5">
                <div id="back5"></div>
                <div id="front5"></div>
              </div>

              <div id="img6">
                <div id="back6"></div>
                <div id="front6"></div>
              </div>

              <div className="slider" onMouseMove={moveSliderPointerHelper}>
                <div id="slider2">
                  <hr id="moveOnHover" />
                </div>
              </div>
            </div>
          </div>

          <div id="scrollingSection">
            <div id="scroll">
              <div className="sliderOption" onClick={first}>
                <span className="littleHeading">
                  <IoIosContract id="icons" /> Tracking
                </span>{" "}
                <br />
                <span className="littleBody">
                  For the problems as Surveillance, Monitoring and Enforcement,
                  detecting and tracking objects in videos.
                </span>
              </div>

              <div className="sliderOption" onClick={second}>
                <span className="littleHeading">
                  <VscSymbolClass id="icons" />
                  Classification
                </span>{" "}
                <br />
                <span className="littleBody">
                  For classification of images to assign them different classes.
                </span>
              </div>

              <div className="sliderOption" onClick={third}>
                <a className="spe">
                  <span className="littleHeading">
                    <BsBoundingBox id="icons" />
                    Bounding Boxes
                  </span>
                </a>
                <br />
                <span className="littleBody">
                  Bounding Boxes are quick and cheap to make, especially with
                  experience. For object detection, localization using
                  2-dimensional or 3-dimensional bounding boxes.
                </span>
              </div>

              <div className="sliderOption" onClick={fourth}>
                <span className="littleHeading">
                  <BiShapePolygon id="icons" />
                  Polygons
                </span>{" "}
                <br />
                <span className="littleBody">
                  For applications like semantic and instance segmentation.{" "}
                </span>
              </div>

              <div className="sliderOption" onClick={fifth}>
                <span className="littleHeading">
                  <GiThreePointedShuriken id="icons" />
                  Points
                </span>{" "}
                <br />
                <span className="littleBody">
                  For key point estimation in problems in Pose Estimation or
                  Facial key points Estimation.{" "}
                </span>
              </div>

              <div className="sliderOption" onClick={sixth}>
                <span className="littleHeading">
                  <AiOutlineFall id="icons" />
                  Lines
                </span>{" "}
                <br />
                <span className="littleBody">
                  For Main roads / Lanes for the self-driving car technology.
                </span>
              </div>
            </div>
            <img
              src={require("../Images/down_arrow.gif")}
              alt="loading..."
              id="down_arrow"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Page2;
