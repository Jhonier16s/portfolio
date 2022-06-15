import React from "react";
import Banner from '../assets/banner-port.jpg'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div id="Home" className="h-screen w-full bg-black-pearl-900">
        <div className="h-full w-full flex items-center justify-center align-middle">
          <div className="w-96 h-64 lg:w-screen lg:h-screen lg:py-16 lg:px-16">
              <div className="w-full h-56 md:w-full md:h-full lg:w-full lg:h-full rounded-lg shadow-2xl overflow-hidden relative">
                <img
                  className="absolute inset-0 h-full w-full object-cover "
                  src={Banner}
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="flex h-full items-center justify-center relative">
                  <motion.h1 
                  initial= {{scale:3}}
                  animate= {{scale:1}}
                  transition={{
                    duration: 1,
                    ease: "anticipate"
                  }}
                  
                  className=" font-mono  text-2xl lg:text-6xl text-teal-100">
                    My Portfolio
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
