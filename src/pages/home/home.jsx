import React, {useRef} from "react";
import img1 from "../../assets/images/home/img1.webp";
import ContactSection from "./contact_section";
import homeStyles from "./home.module.css";
import { sectionHeading, textStyle } from "../../styles/my_styles";
import useViewport from "../../hooks/viewport";
import MyVideos from "./my_vids";
// import { useRef } from react;

function HomePage() {
  const { width } = useViewport();
  const contactSection = useRef(null);

  const TEXT_BREAKPOINT = 700;
  const textWidthAndMargins = {
    width: width < TEXT_BREAKPOINT ? `calc(${width}px - 5vmin)` : TEXT_BREAKPOINT,
    paddingRight: width < TEXT_BREAKPOINT ? 10 : 0,
    marginRight: width > TEXT_BREAKPOINT + 20 ? (width - TEXT_BREAKPOINT) / 2 : "5vmin" ,
    marginLeft: width > TEXT_BREAKPOINT + 20 ? (width - TEXT_BREAKPOINT) / 2 : "5vmin",
    marginBottom: width > TEXT_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
    marginTop: width > TEXT_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
    textAlign: width < TEXT_BREAKPOINT ? "justify" : "left",
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="justify-center App-text">
      <br />
      <br />
      <span className="App-text-brandon" style={sectionHeading}>
        Direction Showreel
      </span>
      <br />
      <br />
      <iframe
        width={width < 740 ? width - 40 : "687"}
        height={width < 740 ? (width - 40)*386/687 : "386"}
        src="https://www.youtube.com/embed/5ljCsKw1Qc8"
        title="My direction reel."
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        autoplay
      ></iframe>
      <br /> <br /> <br /> <br /> <br />
      <br />
      <span className="App-text-brandon" style={{fontSize: "calc(20px + 2vmin)"}}>ABOUT ME</span>
      <p style={{...textStyle, ...textWidthAndMargins}}>
        I was born in Manipal and brought up in Chandigarh. As an immigrant
        there I always felt a sense of alienation which found its expression in
        my art.
        <br />
        Through my art, I wish to express my deepest and most personal emotions
        that resonate with the viewer.
      <br />
      <br />
        My skills as an artist were developed and honed at Whistling Woods
        International where I learned film direction. My education gave me an
        understanding of the Audio Visual medium of film.{" "}
      </p>
      <img src={img1} alt="img not found" style={{
        width: width < 740 ? width - 40 : "476",
        height: width < 740 ? (width - 40)*318/476 : "318"
      }}/>
      <br />
      <br />
      <button className={homeStyles.button} onClick={scrollToContact}>
        Get in Touch
      </button>
      <br />
      <br />
      <MyVideos />
      <br /> <br /> <br /> <br />
      <div ref={contactSection}>
      <ContactSection />
      </div>
      <br/> <br/> <br/> <br/>
    </div>
  );
}

export default HomePage;
