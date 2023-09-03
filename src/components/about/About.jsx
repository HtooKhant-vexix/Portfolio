import React from "react";
import NavRe from "../NavRe";
import { motion } from "framer-motion";
import pic from "../../assets/pic.jpg";
import "../../index.css";
import "./Journey.jsx";
import journeyList from "./Journey.jsx";
import { Title } from "@mantine/core";

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
            className="landBg pt-20 h-[285px] sm:h-[500px] flex justify-center items-center"
          >
            <div className="flex flex-col bg-primary mx-5 shadow-primary/50 shadow-2xl bg-opacity-30 backdrop-blur-lg sm:py-16 px-10 py-5 sm:px-20 rounded-3xl items-center">
              <div className="text-5xl sm:text-7xl text-[#fafafa] font-bold">
                About Me
              </div>
              <div className=" text-[#fafafa] sm:mt-7 mt-4 sm:text-2xl font-semibold   text-center">
                My career journey has been a thrilling adventure.
              </div>
            </div>
          </motion.div>
          <div className="">
            <div className="sm:mt-20  mt-14 flex justify-center mx-auto mb-8 sm:mb-14 xs:text-4xl text-3xl sm:text-6xl md:text-7xl text-primary font-bold ">
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
                className="text-gradient h-[40px] md:h-[90px]"
              >
                Passion and Experiences
              </motion.div>
            </div>
            <div className=" flex flex-wrap justify-around items-center lg:w-[80%] xl:w-[70%] w-[90%] w- mx-auto ">
              <div className="md:hidden flex">
                <motion.div
                  whileInView={{ opacity: 1, x: 1 }}
                  initial={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
                  className="bg-white/20 border md:hidden hover:bg-white/50 flex md:mb-0 mb-10 border-white shadow-secondary/30 shadow-2xl p-5 rounded-3xl w-[300px] "
                >
                  <img src={pic} alt="" className="rounded-xl " />
                </motion.div>
              </div>

              <div className="w-[530px] px-3 sm:w-[580px] md:w-[630px] lg:w-[700px] text-end">
                <motion.h1
                  whileInView={{ opacity: 1, x: 1 }}
                  initial={{ opacity: 0, x: "-100%" }}
                  transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                  className="text-primary pt-1 text-center sm:text-start font-bold sm:pt-0 xs:w-[85%] sm:w-[95%] mx-auto flex w-[100%] md:w-[98%] lg:[100%] text-[17px] md:text-end ss:text-[20px] sm:text-[25px] md:text-[25px]"
                >
                  Hello there! I'm Htoo Aung Khant, a 19-year-old Frontend Web
                  Developer passionate about crafting digital experiences.
                </motion.h1>
                <motion.div
                  whileInView={{ opacity: 1, x: 1 }}
                  initial={{ opacity: 0, x: "-100%" }}
                  transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
                  className="font-poppins md:text-end text-center my-6 sm:my-10 font-bold text-primary leading-6 text-[30px] xs:text-[27px] ss:text-[30px] sm:text-[50px]"
                >
                  I'm Here To
                  <span className="text-gradient ms-2">Assist You</span>
                </motion.div>
                <motion.h1
                  whileInView={{ opacity: 1, x: 1 }}
                  initial={{ opacity: 0, x: "-100%" }}
                  transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
                  className="text-primary pt-1 font-semibold sm:pt-0 xs:w-[85%] sm:w-[95%] mx-auto flex w-[100%] md:w-[98%] lg:[100%] text-[17px] text-center sm:text-start md:text-end ss:text-[20px] sm:text-[25px] md:text-[25px]"
                >
                  I stay updated with the latest industry trends to ensure my
                  work reflects modern design aesthetics and follows the best
                  practices in web development.
                </motion.h1>
              </div>
              <div className="md:flex hidden">
                <motion.div
                  whileInView={{ opacity: 1, x: 1 }}
                  initial={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
                  className="bg-white/20 border hover:bg-white/50 md:mt-0 mt-16 border-white  shadow-secondary/30 shadow-2xl p-5 rounded-3xl w-[300px] "
                >
                  <img src={pic} alt="" className="rounded-xl " />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto mb-16">
            <div className="flex sm:mt-28 justify-center mx-auto md:mb-10 mt-16 mb-6 xs:text-4xl text-4xl h-[50px] lg:h-[100px] sm:text-6xl md:text-7xl text-primary font-bold ">
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                // viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  // ease: "easeOut",
                }}
                className="text-gradient"
              >
                My Journey
              </motion.div>
            </div>
            <div className="md:w-[95%] w-[100%]  grid sm:grid-cols-2 gap-7 mx-auto ">
              {journeyList.map(
                ({
                  title,
                  id,
                  subTitle1,
                  subTitle2,
                  subTitle3,
                  date,
                  desc1,
                  desc2,
                  dl,
                  desc3,
                  dot1,
                  dot2,
                  dot3,
                }) => (
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.5, opacity: 0}}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      delay: dl,
                    }}
                    key={id}
                    className=" w-[100%] rounded-xl bg-white mx-auto p-5 border-2 border-secondary/50 shadow-2xl shadow-secondary/10"
                  >
                    <h1 className="lg:text-2xl text-lg text-secondary mb-2 font-bold">
                      {date}
                    </h1>
                    <h1 className="lg:text-2xl text-lg text-primary flex font-semibold">
                      {title}
                    </h1>
                    <div className="mb-2">
                      <div className="flex items-start">
                        <span className="lg:text-5xl  flex mt-[-12px] text-3xl lg:mt-[-21px] mx-2 font-bold text-primary">
                          {dot1}
                        </span>
                        <h1 className="lg:text-2xl text-lg text-primary w-[90%] flex font-semibold ms-2">
                          {subTitle1}
                        </h1>
                      </div>
                      <h1 className="lg:text-xl text-primary w-[85%] flex ms-8 lg:ms-9">
                        {desc1}
                      </h1>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-start">
                        <span className="text-5xl flex mt-[-21px] mx-2 font-bold text-primary">
                          {dot2}
                        </span>
                        <h1 className="lg:text-2xl text-primary w-[90%] flex font-semibold ms-2">
                          {subTitle2}
                        </h1>
                      </div>
                      <h1 className="lg:text-xl text-primary w-[85%] flex ms-9">
                        {desc2}
                      </h1>
                    </div>
                    <div className="">
                      <div className="flex items-start">
                        <span className="text-5xl flex mt-[-21px] mx-2 font-bold text-primary">
                          {dot3}
                        </span>
                        <h1 className="lg:text-2xl text-primary w-[90%] flex font-semibold ms-2">
                          {subTitle3}
                        </h1>
                      </div>
                      <h1 className="lg:text-xl text-primary w-[85%] flex ms-9">
                        {desc3}
                      </h1>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
