import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeContent from './HomeContent';
import '../index.css'; 

const HomeSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div className="absolute bottom-5 w-full flex justify-center">
        <ul className="m-0 p-0 list-none"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 border-2 border-gray-800 rounded-full my-[-50px]"></div>
    ),
  };

  return (
    <div className="relative bg-[#fdf3e4] z-[-1]">
      <Slider {...settings} >
        <div>
          <HomeContent Sliderimg="https://demo.templatesjungle.com/waggy/images/banner-img.png" />
        </div>
        <div>
          <HomeContent Sliderimg="https://demo.templatesjungle.com/waggy/images/banner-img3.png" />
        </div>
        <div>
          <HomeContent Sliderimg="https://demo.templatesjungle.com/waggy/images/banner-img4.png" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlide;
