import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar";

import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

import Testionials from "./Components/Testimonials";
import Pipeline from "./Components/Pipeline";
import Footer from "./Components/Footer";

import "./Style/Media Queries/Laptop.css";
import "./Style/Media Queries/Ipad.css";
import "./Style/Media Queries/Mobile.css";

function App() {
  return (
    <>
      <div id="App">
        <NavBar />

        <Page1 />

        <Page2 />

        <Page3 />

        <div id="Testimonial">
          <h1>What our Clients say about us.</h1>
          <Testionials
            message="
        Supahands was really professional, they delivered quality results within our timelines. We can't thank them enough for connecting with us regularly and updating us with the progress. Very happy to have worked with them! "
            name="Aiza Ahmad"
            desig="Director @ Axiata Digital"
          />
          <Testionials
            message="
        Supahands was really professional, they delivered quality results within our timelines. We can't thank them enough for connecting with us regularly and updating us with the progress. Very happy to have worked with them! "
            name="Aiza Ahmad"
            desig="Director @ Axiata Digital"
          />
          <Testionials
            message="
        Supahands was really professional, they delivered quality results within our timelines. We can't thank them enough for connecting with us regularly and updating us with the progress. Very happy to have worked with them! "
            name="Aiza Ahmad"
            desig="Director @ Axiata Digital"
          />
        </div>

        <Pipeline />
      </div>
      <Footer />
    </>
  );
}

export default App;
