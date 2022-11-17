import React, { Component } from "react";
import VideoTemplate from "./video_template";
import { sectionHeading, textStyle } from "../../styles/my_styles";
import { videos } from "./video_data";

class FilmographyPage extends Component {
  state = {};
  render() {
    return (
      <div className="justify-content-left App-text">
        <br />
        <br />
        <span className="App-text-brandon" style={sectionHeading}>
          My Work
        </span>
        <br />
        <br />
        <p style={{ fontSize: "calc(10px + 1vmin)", fontFamily: "LcAvenir" }}>
          You will find below the list of projects I've worked on as a writer
          and a director.
        </p>

        <br />
        <br />
        <br />

        <VideoTemplate left vid={videos[0]}/>

        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default FilmographyPage;
