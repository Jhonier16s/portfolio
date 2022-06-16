import React from "react";
import CardSkills from "./CardSkills";
import Title from "./Title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

//imgs
import Js from '../assets/Js.png'
import Html from '../assets/html.png'
import Reactlogo from '../assets/react.png'
import Css3 from '../assets/css3.png'
import Express from '../assets/express.png'
import Mongo from '../assets/mongodb.png'
import TailwindLogo from '../assets/tailwind.png' 
import BootstrapLogo from '../assets/Bootstrap.png'
import NodeLogo from '../assets/node.png'
import GitLogo from '../assets/git.png'
import NextLogo from '../assets/nextjs-logo.png'



const Skills = () => {

  const { ref, inView } = useInView(true);

  const animation = useAnimation();

  useEffect(()=>{
    console.log(inView);
    if (inView) {
        animation.start({
         backgroundColor: "#05101D",
          transition: {
            type: "spring",
            duration: 4,
            bounce: 0.3,
            
            
          },
        })
    }
    if(!inView){
        animation.start({
            backgroundColor: "#000",
            transition: {
            type: "spring",
            duration: 4,
            bounce: 0.3,
           
          },

        })
    }
  },[inView])

  return (
    <>
      <div id="Skills" className="bg-black-pearl-900 pb-10 flex flex-col justify-center">
        <div className="flex justify-center flex-col ">
            <Title  text="Skills" />
          <div ref={ref}className="grid mt-8 px-2 justify-center ">
            <motion.div
             
            animate={animation}
            
            className="grid pb-20 md: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-black-pearl-400 border-2 rounded-lg px-10 py-10 gap-12 place-content-center">
                    <CardSkills className="border-2 border-[#EAD64D] hover:shadow-lg transition duration-200 hover:shadow-[#EAD64D]  shadow-md w-32 md:w-44 rounded-lg" name="JavaScript" logo={Js}/>
                    <CardSkills className="border-2 border-[#E55638] hover:shadow-lg transition duration-200 hover:shadow-[#E55638] shadow-md w-32 md:w-44 rounded-lg" name="Html" logo={Html}/>
                    <CardSkills className="border-2 border-[#0277BD] hover:shadow-lg transition duration-200 hover:shadow-[#0277BD] shadow-md w-32 md:w-44 rounded-lg" name="Css" logo={Css3}/>
                    <CardSkills className="border-2 border-[#61DBFB] hover:shadow-lg transition duration-200 hover:shadow-[#61DBFB] shadow-md w-32 md:w-44 rounded-lg" name="React" logo={Reactlogo}/>
                    <CardSkills className="border-2 border-[#fff]    hover:shadow-lg transition duration-200 hover:shadow-[#fff] shadow-md w-32 md:w-44 rounded-lg" name="Express" logo={Express}/>
                    <CardSkills className="border-2 border-[#7FC363] hover:shadow-lg transition duration-200 hover:shadow-[#7FC363] px-2 shadow-md w-32 md:w-44 rounded-lg" name="MongoDB" logo={Mongo}/>
                    <CardSkills className="border-2 border-[#01B7D6] hover:shadow-lg transition duration-200 hover:shadow-[#01B7D6] px-2 shadow-md  w-32 md:w-44 rounded-lg" name="Tailwind" logo={TailwindLogo}/>
                    <CardSkills className="border-2 border-[#840AF9] hover:shadow-lg transition duration-200 hover:shadow-[#840AF9] px-2 shadow-md w-32 md:w-44 rounded-lg" name="Bootstrap" logo={BootstrapLogo}/>
                    <CardSkills className="border-2 border-[#80BD01] hover:shadow-lg transition duration-200 hover:shadow-[#80BD01] px-2 shadow-md w-32 md:w-44 rounded-lg" name="Node" logo={NodeLogo}/>
                    <CardSkills className="border-2 border-[#DE4C36] hover:shadow-lg transition duration-200 hover:shadow-[#DE4C36] px-2 pb-4 shadow-md w-32 md:w-44 rounded-lg" name="Git" logo={GitLogo}/>    
                    <CardSkills className="border-2 border-[#61DBFB] hover:shadow-lg transition duration-200 hover:shadow-[#61DBFB] shadow-md w-32 md:w-44 rounded-lg" name="R Native" logo={Reactlogo}/>    
                    <CardSkills className="border-2 border-[#fff] hover:shadow-lg transition duration-200 hover:shadow-[#fff] px-2 pb-4 shadow-md w-32 md:w-44 rounded-lg" name="Next" logo={NextLogo}/>    
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
