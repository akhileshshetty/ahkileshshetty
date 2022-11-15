import React, { Component } from "react";
import VideoTemplate from "./video_template";

class FilmographyPage extends Component {
  state = {};
  render() {
    return (
      <div className="justify-content-left App-text">
        <h1>My Work</h1>
        You will find below the list of projects I've worked on as a writer and a director.
        {/* <h1>TODO: add vid component</h1> */}

        <VideoTemplate />
      </div>
    );
  }
}

export default FilmographyPage;
