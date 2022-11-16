import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../hooks/viewport";

function WebsiteHeader() {
  const {width, height} = useViewport();
  const breakpoint = 620;
  return  width < breakpoint ? <MobileHeader/> : <DesktopHeader />;
}

export default WebsiteHeader;

function DesktopHeader() {
  const navItemStyleDesktop = { padding: "calc(10px + 1vmin)", paddingTop: 5 };
  return (
    <div className="App-text p-2">
      <br />
      <span className="App-text-brandon App-header">AKHILESH SHETTY</span>
      <br />
      <div
        className="App-text-avenir"
        style={{ justifyContent: "space-around", fontSize: 18 }}
      >
        <Link to="/" style={navItemStyleDesktop}>
          {" "}
          Home{" "}
        </Link>

        <Link to="/filmography" style={navItemStyleDesktop}>
          Filmography
        </Link>

        <Link to="/photography" style={navItemStyleDesktop}>
          Photography
        </Link>
        <Link to="/paintings" style={navItemStyleDesktop}>
          Paintings
        </Link>
        <Link to="/about" style={navItemStyleDesktop}>
          About
        </Link>
      </div>
    </div>
  );
}
function MobileHeader() {
  const navItemStyleDesktop = { padding: "calc(10px + 1vmin)", paddingTop: 5 };
  return (
    <div className="App-text p-2">
      <br />
      <span className="App-text-brandon App-header">AKHILESH SHETTY</span>
      <br />
      <div
        className="App-text-avenir"
        style={{ justifyContent: "space-around", fontSize: 18 }}
      >
        <Link to="/" style={navItemStyleDesktop}>
          {" "}
          Home{" "}
        </Link>

        <Link to="/filmography" style={navItemStyleDesktop}>
          Filmography
        </Link>

        <Link to="/photography" style={navItemStyleDesktop}>
          Photography
        </Link>
        <Link to="/paintings" style={navItemStyleDesktop}>
          Paintings
        </Link>
        <Link to="/about" style={navItemStyleDesktop}>
          About
        </Link>
      </div>
    </div>
  );
}
