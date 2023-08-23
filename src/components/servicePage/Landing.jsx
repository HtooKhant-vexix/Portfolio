import React from "react";
import "../../index.css";
import { easeOut, motion } from "framer-motion";
import { duration } from "@mui/material";

const Landing = () => {
  return (
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
        className="landBg h-[450px] flex justify-center items-center"
      >
        <div className="flex flex-col bg-primary shadow-primary/50 shadow-2xl bg-opacity-30 backdrop-blur-lg p-16 px-20 rounded-3xl items-center">
          <div className="text-7xl text-[#fafafa] font-bold">My Service</div>
          <div className=" text-[#fafafa] mt-7 text-2xl font-semibold  text-center">
            Craft and Build Web beyond creativity.
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
