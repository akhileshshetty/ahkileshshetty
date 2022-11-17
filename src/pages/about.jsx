import React, { Component } from "react";
import about from "../assets/images/about/about.webp";
import useViewport from "../hooks/viewport";

function AboutPage() {
  const { width, height } = useViewport();
  const maxWidth = 600;
  return (
    <React.Fragment>
    <img
      src={about}
      alt="img not found"
      style={{ maxWidth: width < maxWidth ? width : maxWidth,  }}
    />
    <br />
    <br />
    <br />
    </React.Fragment>
  );
}

export default AboutPage;
