import React from "react";
import useViewport from "../../hooks/viewport";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "../../styles.css";
import {homePageVideos} from "./video_data_home";


function MyVideos() {
  const { width } = useViewport();
  return <MyVidsMobDisp />;
}

function MyVidsMobDisp() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        // style={{ height: 400 }}
      >
        {/* {Array(27).map((_, i) => <SwiperSlide><img src={images[i]}/></SwiperSlide>)} */}
        <SwiperSlide> <Video vid={homePageVideos[0]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[1]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[2]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[3]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[4]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[5]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[6]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[7]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[8]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[9]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[10]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[11]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[12]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[13]} /> </SwiperSlide>
        <SwiperSlide> <Video vid={homePageVideos[14]} /> </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Video(props) {
  return (
    <iframe
      width="940"
      height="530"
      src={`https://www.youtube.com/embed/${props.vid.id}`}
      title={props.vid.title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
}

export default MyVideos;
