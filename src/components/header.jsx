import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import useViewport from "../hooks/viewport";
import "../styles.css";
import { useState } from "react";

function WebsiteHeader() {
  const { width, height } = useViewport();
  const breakpoint = 620;
  return width < breakpoint ? (
    <MobileHeader width={width} height={height} />
  ) : (
    <DesktopHeader />
  );
}

export default WebsiteHeader;

function MobileHeader(props) {
  const navItemStyleMob = { padding: "calc(20px + 1vmin)", fontSize: 20 };
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setOpen(false)
  }
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "18px",
      height: "15px",
      right: "36px",
      top: "23px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "white",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "black",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#white",
      padding: "0.8em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <div
      className="App-text p-2"
    >
      {/* <br /> */}
      <span className="App-text-brandon App-header-mob">AKHILESH SHETTY</span>
      {/* <br /> */}
      <Menu
        right
        width={props.width}
        height={props.height}
        className="App-text-avenir"
        styles={styles}
        isOpen={isOpen}
        onOpen={toggleOpen}
        onClose={toggleOpen}
      >
        <Link to="/" style={navItemStyleMob} onClick={closeMenu}>
          Home
        </Link>

        <Link to="/filmography" style={navItemStyleMob} onClick={closeMenu}>
          Filmography
        </Link>

        <Link to="/photography" style={navItemStyleMob} onClick={closeMenu}>
          Photography
        </Link>
        <Link to="/paintings" style={navItemStyleMob} onClick={closeMenu}>
          Paintings
        </Link>
        <Link to="/about" style={navItemStyleMob} onClick={closeMenu}>
          About
        </Link>
      </Menu>
    </div>
  );
}

function DesktopHeader() {
  const navItemStyleDesktop = { padding: "calc(10px + 1vmin)", paddingTop: 5};
  return (
    <div className="App-text p-2">
      <span className="App-text-brandon App-header">AKHILESH SHETTY</span>
      <div
        className="App-text-avenir"
        style={{ justifyContent: "space-around", fontSize: 18 }}
      >
        <Link to="/" style={navItemStyleDesktop}>
          Home
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
