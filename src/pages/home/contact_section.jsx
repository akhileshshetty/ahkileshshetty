import React, { Component } from "react";

class ContactSection extends Component {
  state = {};
  render() {
    return (
      <div id="home_contact">
        <span
          className="App-text-brandon"
          style={{ fontSize: "calc(20px + 2vmin)" }}
        >
          CONTACT
        </span>
        <p className="App-text-avenir" style={{fontSize: "calc(12px + 1vmin)"}}>
          Popular apartments, 4 Bungalows
          <br />
          akhileshnexus@gmail.com
          <br />
          7986008497
        </p>
      </div>
    );
  }
}

export default ContactSection;
