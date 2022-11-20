import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../styles.css";

import { photographyPageImages } from "../assets/images/image_data";

import { Navigation } from "swiper";
import { sectionHeading, textStyle } from "../styles/my_styles";
import useViewport from "../hooks/viewport";

function PhotographyPage() {
  const { width } = useViewport();
  const TEXT_BREAKPOINT = 700;
  const textWidthAndMargins = {
    width: width < TEXT_BREAKPOINT ? `calc(${width}px - 5vmin)` : TEXT_BREAKPOINT,
    padding: width < TEXT_BREAKPOINT ? 10 : 0,
    marginRight: width > TEXT_BREAKPOINT + 20 ? (width - TEXT_BREAKPOINT) / 2 : "5vmin" ,
    marginLeft: width > TEXT_BREAKPOINT + 20 ? (width - TEXT_BREAKPOINT) / 2 : "5vmin",
    marginBottom: width > TEXT_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
    marginTop: width > TEXT_BREAKPOINT + 20 ? "calc(35px + 2vmin)" : "5vmin" ,
  };

  return (
    <div className="App-text">
      <br />
      <br />
      <span className="App-text-brandon" style={sectionHeading}>
        Photography
      </span>
      <br />
      <br />
      <p
        style={{
          ...textStyle,
          ...textWidthAndMargins,
        }}
      >
        I've always been fascinated by the visual medium and the power an image
        has. Photographers like Henri Cartier Bresson, Ernst Haas and Robert
        Frank have a deep impression on me. Over the years I've tried to explore
        the medium of photography as an enthusiast and try to form my own
        language. Photography taught me patience and observation, it has
        literally changed the way I look at the world.{" "}
      </p>

      <br />
      <br />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ height: 400, "--swiper-navigation-color": "rgba(255, 255, 255, 1)" }}
      >
        {/* {Array(27).map((_, i) => <SwiperSlide><img src={images[i]}/></SwiperSlide>)} */}
        <SwiperSlide>
          <img src={photographyPageImages[0]} alt="img1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[1]} alt="img2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[2]} alt="img3" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[3]} alt="img4" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[4]} alt="img5" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[5]} alt="img6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[6]} alt="img7" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[7]} alt="img8" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[8]} alt="img9" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[9]} alt="img10" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[10]} alt="img11" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[11]} alt="img12" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[12]} alt="img13" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[13]} alt="img14" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[14]} alt="img15" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[15]} alt="img16" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[16]} alt="img17" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[17]} alt="img18" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[18]} alt="img19" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[19]} alt="img20" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[20]} alt="img21" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[21]} alt="img22" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[22]} alt="img23" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[23]} alt="img24" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[24]} alt="img25" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[25]} alt="img26" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPageImages[26]} alt="img27" loading="lazy" />
        </SwiperSlide>
      </Swiper>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default PhotographyPage;
