import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import NavRe from "./NavRe";
import Mail from "./Mail";

const Contact = () => {
  return (
    <>
      <NavRe />
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
          <div className="flex flex-col mx-4 bg-primary shadow-primary/50 shadow-2xl bg-opacity-30 backdrop-blur-lg sm:py-16 px-10 py-5 sm:px-20 rounded-3xl items-center">
            <div className="text-5xl sm:text-7xl text-[#fafafa] font-bold">
              Get In Touch
            </div>
            <div className=" text-[#fafafa] mt-4 sm:mt-7 sm:text-2xl font-semibold  text-center">
              I am here, ready and eager to work and collaborate.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="">
        <div className=" mt-20 md:mt-24 flex justify-center mx-auto mb-8 sm:mb-10 text-5xl sm:text-7xl text-primary font-bold ">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-gradient"
          >
            OPEN TO WORK
          </motion.div>
        </div>
        <div className="">
          <p className="text-primary sm:pt-0 xs:w-[85%] sm:w-[95%] mx-auto flex w-[90%] md:w-[75%] lg:[80%] text-[17px] text-center ss:text-[20px] sm:text-[25px] md:text-[25px]">
            I am currently looking for exciting job chances and experiences in
            web development that can help me learn and become better. I'm open
            to freelance or part-time web design work, as well as mid-level
            positions. I'd be really happy to work with you and your great team.
            Please feel free to contact me. I can't wait for the opportunity to
            work together!
          </p>
        </div>
        <div className="mt-">
          <Mail />
        </div>
      </div>
    </>
  );
};

export default Contact;
