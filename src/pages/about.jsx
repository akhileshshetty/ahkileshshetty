import React from "react";
import useViewport from "../hooks/viewport";
import { aboutPageImages } from "../assets/images/image_data";

function AboutPage() {
  const { width } = useViewport();
  const maxWidth = 600;
  return (
    <React.Fragment>
    <img
      src={aboutPageImages[0]}
      loading="eager"
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
