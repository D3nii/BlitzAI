import React from "react";

import "../Style/Pipeline.css";

let counter = 0;

class Pipeline extends React.Component {
  constructor() {
    super();
    this.changeStyling = this.changeStyling.bind(this);
    this.restore = this.restore.bind(this);
  }

  componentDidMount() {
    let idek = setInterval(() => {
      if (counter == 6) {
        counter = 0;
        this.restore();
      }

      this.changeStyling(counter);
      counter++;
    }, 3000);
  }

  changeStyling(temp) {
    for (let i = 0; i < 6; i++) {
      document.getElementById(`PipelineCard${i}`).style.opacity = "0.1";
      if (i == temp) continue;
    }
    document.getElementById(`PipelineCard${temp}`).style.opacity = "1";
  }

  restore() {
    for (let i = 0; i < 6; i++) {
      document.getElementById(`PipelineCard${i}`).style.backgroundColor =
        "white";
    }
  }

  render() {
    return (
      <div id="PipelineWrapper">
        <h2 id="PipelineMain">Our Pipeline</h2>
        <div id="Pipeline">
          <div id="PipelineCard0">
            <div id="PipelineHeading">Team Alignment</div>

            <div id="PipelineBody">
              Multiple teams of 7 members are selected based on Project size.
            </div>
          </div>

          <div id="PipelineCard1">
            <div id="PipelineHeading">Pre-Labelling</div>

            <div id="PipelineBody">
              Images are first pre-labelled by our pespiety ML models.
            </div>
          </div>

          <div id="PipelineCard2">
            <div id="PipelineHeading">Human Annotation</div>

            <div id="PipelineBody">
              Humans manually annotate pre labbeled datasets.
            </div>
          </div>

          <div id="PipelineCard3">
            <div id="PipelineHeading">Peer Review</div>

            <div id="PipelineBody">
              Manual annotations are reviewed by bla and bla and removed if
              needed.
            </div>
          </div>

          <div id="PipelineCard4">
            <div id="PipelineHeading">Lead Review</div>

            <div id="PipelineBody">
              Team Lead manually reviews 20% of teh whole data and if quality of
              data is below what is required by the client, whole project would
              be repeated.
            </div>
          </div>

          <div id="PipelineCard5">
            <div id="PipelineHeading">Deliver</div>

            <div id="PipelineBody">
              Your high quality data annotation are delivered to you to spice up
              your ML game.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pipeline;
