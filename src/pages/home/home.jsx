import React, { Component } from "react";
import YouTube from "react-youtube";
import img1 from '../../assets/images/home/img1.webp';
import ContactSection from "./contact_section";
import homeStyles from "./home.module.css"

class HomePage extends Component {
  state = {};
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
        
      <div className="justify-center App-text" >
        <h1>Direction Showreel</h1>
        <YouTube videoId="5ljCsKw1Qc8" opts={opts} onReady={this._onReady} />
        <h2>ABOUT ME</h2>
        <p>
          I was born in Manipal and brought up in Chandigarh. As an immigrant
          there I always felt a sense of alienation which found its expression
          in my art.
          <br />
          Through my art, I wish to express my deepest and most personal
          emotions that resonate with the viewer.
        </p>
        <p>
          {" "}
          My skills as an artist were developed and honed at Whistling Woods
          International where I learned film direction. My education gave me an
          understanding of the Audio Visual medium of film.{" "}
        </p>

        <img src={img1} alt='img not found'/>
        <br/>
        <br/>
        <button className= {homeStyles.button} onClick={this.goToContact}>Get in Touch</button>
        <ContactSection />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  //TODO: implement func
  goToContact(){
    console.log("implement func");
  }
}

export default HomePage;
