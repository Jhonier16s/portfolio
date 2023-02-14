import React from "react";
import CardProjects from "./CardProjects";
import Title from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import Taskapp from '../assets/Taskapp.jpg'
import Pokedex from '../assets/Pokedex.jpg'
import Parking from '../assets/Parking.jpg'
import Portfolio from '../assets/Portfolio.jpg'
import Weather from '../assets/Weather.jpg'
import Passw from '../assets/Passw.jpg'
import Coin from '../assets/Coin.jpg'
//
const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div id="Projects" className="bg-black-pearl-900 py-10 mt-6 mb-12 px-12">
        <div className="pb-10">
          <Title text="Projects" />
        </div>
          <Slider {...settings}>
          <CardProjects classname="text-white font-bold bg-[#2E72BC] px-3 py-1 rounded-md hover:bg-purple-7001" tecnology="Typescritp, Reactjs, Node" title="Task app" miniature={Taskapp} />
            <CardProjects classname="text-black-pearl-900 font-bold bg-[#EAD64D] px-3 py-1 rounded-md hover:bg-purple-7001" tecnology="Javascript, Tailwind" title="Pokedex" miniature={Pokedex}/>
            <CardProjects classname="text-black-pearl-900 font-bold bg-[#61DBFB] px-3 py-1 rounded-md hover:bg-purple-7001" tecnology="React, Bootstrap" title="Parking app"miniature={Parking} />
            <CardProjects classname="text-white font-bold bg-[#01A7C3] px-3 py-1 rounded-md hover:bg-purple-7001" tecnology="Reactjs, Tailwind" title="Portfolio" miniature={Portfolio}/>
            <CardProjects classname="text-black-pearl-900 font-bold bg-[#61DBFB] px-3 py-1 rounded-md hover:bg-purple-7001 " tecnology="Reactjs, typescript " title="Weather App"miniature={Weather} />
            <CardProjects classname="text-black-pearl-900 font-bold bg-[#EAD64D] px-3 py-1 rounded-md hover:bg-purple-7001" tecnology="Javascript" title="Password generator"miniature={Passw} />
            <CardProjects classname="text-white font-bold bg-[#01A7C3] px-3 py-1 rounded-md hover:bg-purple-7001" tecnology="React-native" title="CoinGeko api CriptoApp" miniature={Coin}/>
            
          </Slider>
      </div>
    </>
  );
};

export default Projects;
