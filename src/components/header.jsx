import React, { Component } from "react";
import { Link } from "react-router-dom";

class WebsiteHeader extends Component {
  state = {};
  render() {
    return (
      <DesktopHeader />
    );
  }
}

export default WebsiteHeader;


// style={{padding: 10, paddingTop: 5}}
function DesktopHeader(){
  return(
    <div className="App-text p-2">
      <br/>
        <span className="App-text-brandon App-header">
          AKHILESH SHETTY
          </span>
          <br />
          <div className="App-text-avenir" style={{justifyContent: 'space-around', fontSize: 15}}>
            
              <Link to="/" > Home </Link>
            
              <Link to="/filmography" className="App-header-nav-items">
                Filmography
              </Link>
          
              <Link to="/photography" >
                Photography
              </Link>
              <Link to="/paintings" >
                Paintings
              </Link>
              <Link to="/about" >
                About
              </Link>
              </div>
      </div>
  );
}
