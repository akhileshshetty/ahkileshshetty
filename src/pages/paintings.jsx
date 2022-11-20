import React from "react";

import useViewport from "../hooks/viewport";
import { paintingsPageImages } from "../assets/images/image_data";

import { sectionHeading, textStyle } from "../styles/my_styles";

function PaintingsPage() {
  const { width } = useViewport();
  const TEXT_BREAKPOINT = 700;
  const IMG_BREAKPOINT = 600;
  const textWidthAndMargins = {
    width: width < TEXT_BREAKPOINT ? `calc(${width}px - 5vmin)` : TEXT_BREAKPOINT,
    padding: width < TEXT_BREAKPOINT ? 10 : 0,
    marginRight: width > TEXT_BREAKPOINT + 20 ? (width - TEXT_BREAKPOINT) / 2 : "5vmin" ,
    marginLeft: width > TEXT_BREAKPOINT + 20 ? (width - TEXT_BREAKPOINT) / 2 : "5vmin",
    marginBottom: width > TEXT_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
    marginTop: width > TEXT_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
  };
  const imgWidthAndMargins = {
    width: width < IMG_BREAKPOINT ? `calc(${width}px - 5vmin)` : IMG_BREAKPOINT,
    marginRight: width > IMG_BREAKPOINT + 20 ? (width - IMG_BREAKPOINT) / 2 : "5vmin" ,
    marginLeft: width > IMG_BREAKPOINT + 20 ? (width - IMG_BREAKPOINT) / 2 : "5vmin" ,
    marginBottom: width > IMG_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
    marginTop: width > IMG_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
  };

  return (
    <div className="App-text">
      <br />
      <br />
      <span className="App-text-brandon" style={sectionHeading}>
        Paintings
      </span>
      <br />
      <br />

      <p
        style={{
          ...textStyle,
          ...textWidthAndMargins
        }}
      >
        When I was a kid my mother used to go to art classes where she learned
        to make oil paintings. I was fascinated as a child to see bottles of
        linseed oil and turpentine, although my own artistic pursuits started
        much later. I started painting in college when my friend, who is a
        hyperrealist painter, encouraged me to paint. Since then painting has
        been an activity that slows my inner rhythm and lets me express the
        areas of my mind that is not stimulated by other art forms.
      </p>
      <br />
      <br />
      <br />
      <br />
      <img src={paintingsPageImages[0]} alt="ptng1" style={imgWidthAndMargins} loading="lazy" />
      <br />
      <img src={paintingsPageImages[1]} alt="ptng2" style={imgWidthAndMargins} loading="lazy" />
      <br />
      <img src={paintingsPageImages[2]} alt="ptng3" style={imgWidthAndMargins} loading="lazy" />
      <br />
      <img src={paintingsPageImages[3]} alt="ptng4" style={imgWidthAndMargins} loading="lazy" />
      <br />
      <img src={paintingsPageImages[4]} alt="ptng5" style={imgWidthAndMargins} loading="lazy" />
      <br />
      <img src={paintingsPageImages[5]} alt="ptng6" style={imgWidthAndMargins} loading="lazy" />
      <br />
      <img src={paintingsPageImages[6]} alt="ptng7" style={imgWidthAndMargins} loading="lazy" />
      <br />
      {/* <img src={ptng2} alt="ptng2" style={imgWidthAndMargins} />
      <br />
      <img src={ptng3} alt="ptng3" style={imgWidthAndMargins} />
      <br />
      <img src={ptng4} alt="ptng4" style={imgWidthAndMargins} />
      <br />
      <img src={ptng5} alt="ptng5" style={imgWidthAndMargins} />
      <br />
      <img src={ptng6} alt="ptng6" style={imgWidthAndMargins} />
      <br />
      <img src={ptng7} alt="ptng7" style={imgWidthAndMargins} />
      <br /> */}
    </div>
  );
}

export default PaintingsPage;
