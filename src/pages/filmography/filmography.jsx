import React from "react";
import VideoTemplate from "./video_template";
import { sectionHeading } from "../../styles/my_styles";
import { videos } from "./video_data";

function FilmographyPage() {
    return (
      <div className="justify-content-left App-text">
        <br />
        <br />
        <span className="App-text-brandon" style={sectionHeading}>
          My Work
        </span>
        <br />
        <br />
        <p style={{ fontSize: "calc(10px + 1vmin)", fontFamily: "LcAvenir", marginLeft: "5vmin", marginRight: "5vmin" }}>
          You will find below the list of projects I've worked on as a writer
          and a director.
        </p>

        <br />
        <br />
        <br />

        <VideoTemplate left vid={videos[0]}/>
        <VideoTemplate vid={videos[1]}/>
        <VideoTemplate vid={videos[2]}/>
        <VideoTemplate left vid={videos[3]}/>
        <VideoTemplate vid={videos[4]}/>
        <VideoTemplate left vid={videos[5]}/>
        <VideoTemplate left vid={videos[6]}/>
        <VideoTemplate vid={videos[7]}/>

        <br />
        <br />
        <br />
      </div>
    );
}

export default FilmographyPage;
