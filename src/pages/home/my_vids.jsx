import React from "react";
import useViewport from "../../hooks/viewport";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import { homePageVideos } from "./video_data_home";
import { useState } from "react";

import { ImageList, ImageListItem } from "@material-ui/core";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "../../styles.css";


const BREAKPOINT = 740;

function MyVideos() {
  const { width } = useViewport();
  return width < BREAKPOINT ? (
    <MyVidsMob width={width} />
  ) : (
    <MyVidsDesktop width={width} />
  );
}

function MyVidsDesktop(props) {
  const [currVidIndex, setCurrVidIndex] = useState(0);
  const swiperRef = useRef(null);
  function pause(id) {
    let video = document.getElementById(`youtube_player${id}`);
    video.contentWindow.postMessage(
      '{"event":"command", "func":"pauseVideo", "args":""}',
      "*"
    );
  }
  function goToSlide(index) {
    const temp = currVidIndex;
    pause(homePageVideos[temp].id);
    swiperRef.current.swiper.slideTo(index);
    setCurrVidIndex(index);
    window.scrollTo({
      top: swiperRef.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Swiper
        // navigation={true}
        // modules={[Navigation]}
        ref={swiperRef}
        className="mySwiper"
        onSlideNextTransitionStart={() => {
          const temp = currVidIndex;
          pause(homePageVideos[temp].id);
          setCurrVidIndex(temp + 1);
        }}
        onSlidePrevTransitionStart={() => {
          const temp = currVidIndex;
          pause(homePageVideos[temp].id);
          setCurrVidIndex(temp - 1);
        }}
        // allowSlideNext={false}
        // allowSlidePrev={false}
        allowTouchMove={false}
      >
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[0]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[1]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[2]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[3]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[4]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[5]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[6]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[7]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[8]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[9]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[10]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[11]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[12]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[13]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide noSwiping={true}>
          <Video vid={homePageVideos[14]} width={props.width} />
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <ImageList
        cols={4}
        // rowHeight={164}
        alignItems="center"
        justify="center"
        style={{
          width:
            props.width > 980
              ? "940"
              : props.width < BREAKPOINT
              ? props.width - 40
              : "687",
          marginLeft:
            props.width > 980
              ? (props.width - 940) / 2
              : props.width < BREAKPOINT
              ? 20
              : (props.width - 687) / 2,
          marginRight:
            props.width > 980
              ? (props.width - 940) / 2
              : props.width < BREAKPOINT
              ? 20
              : (props.width - 687) / 2,
        }}
      >
        {homePageVideos.map((vid, i) => (
          <ImageListItem key={vid.id}>
            <img
              src={`https://img.youtube.com/vi/${vid.id}/0.jpg`}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={vid.id}
              loading="lazy"
              style={{ margin: 10, color: "#000000" }}
              onClick={() => {
                console.log(i);
                goToSlide(i);
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

function MyVidsMob(props) {
  const [currVidIndex, setCurrVidIndex] = useState(0);
  function pause(id) {
    let video = document.getElementById(`youtube_player${id}`);
    video.contentWindow.postMessage(
      '{"event":"command", "func":"pauseVideo", "args":""}',
      "*"
    );
  }
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{"--swiper-navigation-color": "rgba(255, 255, 255, 1)"}}
        onSlideNextTransitionStart={() => {
          const temp = currVidIndex;
          pause(homePageVideos[temp].id);
          setCurrVidIndex(temp + 1);
        }}
        onSlidePrevTransitionStart={() => {
          const temp = currVidIndex;
          pause(homePageVideos[temp].id);
          setCurrVidIndex(temp - 1);
        }}
      >
        <SwiperSlide>
          <Video vid={homePageVideos[0]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[1]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[2]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[3]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[4]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[5]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[6]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[7]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[8]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[9]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[10]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[11]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[12]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[13]} width={props.width} />
        </SwiperSlide>
        <SwiperSlide>
          <Video vid={homePageVideos[14]} width={props.width} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Video(props) {
  return (
    <iframe
    loading="lazy"
      id={`youtube_player${props.vid.id}`}
      width={
        props.width > 980
          ? "940"
          : props.width < BREAKPOINT
          ? props.width - 40
          : "687"
      }
      height={
        props.width > 980
          ? "530"
          : props.width < BREAKPOINT
          ? ((props.width - 40) * 386) / 687
          : "386"
      }
      src={`https://www.youtube.com/embed/${props.vid.id}?enablejsapi=1`}
      title={props.vid.title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
}

export default MyVideos;
