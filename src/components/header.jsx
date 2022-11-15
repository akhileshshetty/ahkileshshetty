import React, { Component } from "react";
import { Link } from "react-router-dom";
import compStyles from "./comp.module.css";

class WebsiteHeader extends Component {
  state = {};
  render() {
    return (
      <div className="App-text p-2">
        <span style={{fontSize: 30, fontWeight: 100}}>
          AKHILESH SHETTY
          </span>
          <br />
          <div class="justify-content-around">
            
              <Link to="/"> Home </Link>
            
              <Link to="/filmography">
                Filmography
              </Link>
          
              <Link to="/photography">
                Photography
              </Link>
              <Link to="/paintings">
                Paintings
              </Link>
              <Link to="/about">
                About
              </Link>
              </div>
      </div>
    );
  }
}

export default WebsiteHeader;
