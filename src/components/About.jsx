import React from "react";
import NavRe from "./NavRe";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <NavRe />
      <div>
        <div className="m-0 p-0">
          <motion.div
            whileInView={{ y: 1, opacity: 1 }}
            initial={{ y: "-190px", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              ease: "easeOut",
            }}
            className="landBg pt-24 h-[300px] sm:h-[500px] flex justify-center items-center"
          >
            <div className="flex flex-col bg-primary shadow-primary/50 shadow-2xl bg-opacity-30 backdrop-blur-lg sm:py-16 px-10 py-5 sm:px-20 rounded-3xl items-center">
              <div className="text-5xl sm:text-7xl text-[#fafafa] font-bold">
                About Me
              </div>
              <div className=" text-[#fafafa] mt-7 sm:text-2xl font-semibold  text-center">
                My career journey has been a thrilling adventure.
              </div>
            </div>
          </motion.div>
          <div className="h-[600px]">
            <div className="sm:mt-20 mt-14 flex justify-center mx-auto mb-14 sm:mb-20 text-3xl sm:text-7xl text-primary font-bold ">
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                // viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="text-gradient"
              >
                Passion and Experiences
              </motion.div>
            </div>
            <div className="flex justify-between lg:w-[70%] w-[90%] w- mx-auto ">
                <div className="bg-red-300"></div>
                <div className="bg-red-300 w-[300px] h-[300px]">
                  <img src="" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
