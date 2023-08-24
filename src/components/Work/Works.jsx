import React from "react";
import { motion } from "framer-motion";
import Card from "../card/Card.jsx";
import CardDetail from "../card/CardDetail.jsx";
import Work from "./Work.jsx";

const Works = () => {
  return (
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
          className="landBg h-[300px] sm:h-[450px] flex justify-center items-center"
        >
          <div className="flex flex-col bg-primary shadow-primary/50 shadow-2xl bg-opacity-30 backdrop-blur-lg sm:py-16 px-10 py-5 sm:px-20 rounded-3xl items-center">
            <div className="text-5xl sm:text-7xl text-[#fafafa] font-bold">
              My Works
            </div>
            <div className=" text-[#fafafa] mt-7 sm:text-2xl font-semibold  text-center">
              The followings are my practical and personal projects.
            </div>
          </div>
        </motion.div>
      </div>
      <div className=" mt-24 flex justify-center mx-auto mb-14 sm:mb-14 text-5xl sm:text-7xl text-primary font-bold ">
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
          Recent Works
        </motion.div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 mb-20 p-10">
        {CardDetail.map(({ id, ...cardProps }) => (
          <div
            // whileInView={{ y: 1, opacity: 1 }}
            // initial={{ y: "200px", opacity: 0 }}
            // viewport={{ once: true }}
            // transition={{
            //   type: "spring",
            //   stiffness: 40,
            //   ease: "easeOut",
            // }}
            key={id}
            className=""
          >
            <Work {...cardProps} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
