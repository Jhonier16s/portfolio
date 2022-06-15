import React from "react";
import dev from "../assets/dev.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const AboutMe = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
      animation2.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <>
      <div id="about-me" className="bg-black-pearl-900 py-4 ">
        <div className="flex justify-evenly flex-wrap">
          <motion.div
            ref={ref}
            animate={animation2}
            className="max-w-screen-sm text-black-pearl-100 py-10 px-4"
          >
            <div className="flex flex-row pb-2">
              <h1 className="text-6xl bold font-bold">I'm </h1>
              <h1 className="px-2 text-6xl font-bold ">Jhonier</h1>
            </div>
            <p className="px-2">
              I am a web developer and systems technician, I live in Colombia, I
              am 19 years old. I have a passion for technology since I was very
              young, when I met the world of programming I did not hesitate for
              a second to learn, I always keep studying new technologies, in
              order to continue advancing more every day and be one of the best
              developers in the world.
            </p>
          </motion.div>
          <div ref={ref}
          className="px-8">
            <motion.img
              animate={animation}
              src={dev}
              width="400px"
              height="300px"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default AboutMe;
