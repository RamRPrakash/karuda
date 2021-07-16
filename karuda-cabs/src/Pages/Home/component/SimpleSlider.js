import React  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import NewCarBg1 from '../../../images/NewCarBg1.jpg'
import NewCarBg2 from '../../../images/NewCarBg2.jpg'
import NewCarBg3 from '../../../images/NewCarBg3.jpg'
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'
import header_image from '../../../images/header_image.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows :true ,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    // <Slider {...settings}>
    //   <div>
    //   <img alt="NewCarBg1" src={img1} style={{width : '100%' , height : '450px'}}></img>
    //   </div>
    //   <div>
    //   <img alt="NewCarBg2" src={img2} style={{width : '100%' , height : '450px'}}></img>
    //   </div>
    //   {/* <div>
    //   <img alt="NewCarBg3" src={NewCarBg3} style={{width : '100%' , height : '30%'}}></img>
    //   </div> */}
    // </Slider>
    <div>
      <img alt="NewCarBg2" src={header_image} style={{width : '100%' , height : '450px'}}></img>
    </div>
  );
}