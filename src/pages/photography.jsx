import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../styles.css";

import img1 from '../assets/images/photography/img1.PNG';
import img2 from '../assets/images/photography/img2.PNG';
import img3 from '../assets/images/photography/img3.PNG';
import img4 from '../assets/images/photography/img4.PNG';
import img5 from '../assets/images/photography/img5.PNG';
import img6 from '../assets/images/photography/img6.PNG';
import img7 from '../assets/images/photography/img7.PNG';
import img8 from '../assets/images/photography/img8.PNG';
import img9 from '../assets/images/photography/img9.PNG';
import img10 from '../assets/images/photography/img10.PNG';
import img11 from '../assets/images/photography/img11.PNG';
import img12 from '../assets/images/photography/img12.PNG';
import img13 from '../assets/images/photography/img13.PNG';
import img14 from '../assets/images/photography/img14.PNG';
import img15 from '../assets/images/photography/img15.PNG';
import img16 from '../assets/images/photography/img16.PNG';
import img17 from '../assets/images/photography/img17.PNG';
import img18 from '../assets/images/photography/img18.PNG';
import img19 from '../assets/images/photography/img19.PNG';
import img20 from '../assets/images/photography/img20.PNG';
import img21 from '../assets/images/photography/img21.PNG';
import img22 from '../assets/images/photography/img22.PNG';
import img23 from '../assets/images/photography/img23.PNG';
import img24 from '../assets/images/photography/img24.PNG';
import img25 from '../assets/images/photography/img25.PNG';
import img26 from '../assets/images/photography/img26.PNG';
import img27 from '../assets/images/photography/img27.PNG';
// import img28 from '../images/photography/img28.PNG';



import { Navigation } from "swiper";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27
];

class PhotographyPage extends Component {
  state = {};
  render() {
    return (
      <div className="App-text">
        <h1>Photography</h1>
        <p>
        I've always been fascinated by the visual medium and the power an image
        has. Photographers like Henri Cartier Bresson, Ernst Haas and Robert
        Frank have a deep impression on me. Over the years I've tried to explore
        the medium of photography as an enthusiast and try to form my own
        language. Photography taught me patience and observation, it has
        literally changed the way I look at the world.{" "}
        </p>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{height: 400}}>
          {/* {Array(27).map((_, i) => <SwiperSlide><img src={images[i]}/></SwiperSlide>)} */}
        <SwiperSlide ><img src={img1} alt="img1" /></SwiperSlide>
        <SwiperSlide ><img src={img2} alt="img2"/></SwiperSlide>
        <SwiperSlide ><img src={img3} alt="img3"/></SwiperSlide>
        <SwiperSlide ><img src={img4} alt="img4"/></SwiperSlide>
        <SwiperSlide ><img src={img5} alt="img5"/></SwiperSlide>
        <SwiperSlide ><img src={img6} alt="img6"/></SwiperSlide>
        <SwiperSlide ><img src={img7} alt="img7"/></SwiperSlide>
        <SwiperSlide ><img src={img8} alt="img8"/></SwiperSlide>
        <SwiperSlide ><img src={img9} alt="img9"/></SwiperSlide> 
        <SwiperSlide ><img src={img10} alt="img10"/></SwiperSlide> 
        <SwiperSlide ><img src={img11} alt="img11"/></SwiperSlide> 
        <SwiperSlide ><img src={img12} alt="img12"/></SwiperSlide> 
        <SwiperSlide ><img src={img13} alt="img13"/></SwiperSlide> 
        <SwiperSlide ><img src={img14} alt="img14"/></SwiperSlide> 
        <SwiperSlide ><img src={img15} alt="img15"/></SwiperSlide> 
        <SwiperSlide ><img src={img16} alt="img16"/></SwiperSlide> 
        <SwiperSlide ><img src={img17} alt="img17"/></SwiperSlide> 
        <SwiperSlide ><img src={img18} alt="img18"/></SwiperSlide> 
        <SwiperSlide ><img src={img19} alt="img19"/></SwiperSlide> 
        <SwiperSlide ><img src={img20} alt="img20"/></SwiperSlide> 
        <SwiperSlide ><img src={img21} alt="img21"/></SwiperSlide> 
        <SwiperSlide ><img src={img22} alt="img22"/></SwiperSlide> 
        <SwiperSlide ><img src={img23} alt="img23"/></SwiperSlide> 
        <SwiperSlide ><img src={img24} alt="img24"/></SwiperSlide> 
        <SwiperSlide ><img src={img25} alt="img25"/></SwiperSlide> 
        <SwiperSlide ><img src={img26} alt="img26"/></SwiperSlide> 
        <SwiperSlide ><img src={img27} alt="img27"/></SwiperSlide> 
      </Swiper> 
      </div>
    );
  }
}

export default PhotographyPage;
