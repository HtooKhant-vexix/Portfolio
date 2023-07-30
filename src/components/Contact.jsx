import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


const variants = {
    left: {x:"-200px", opacity:0 },
    right: {translateX:0 , opacity:1}
}
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex  flex-col justify-center items-center">
      <motion.div
        animate={isOpen ? "right" : "left"}
        variants={variants}
        className="w-[200px] h-[200px] bg-red-300"
      ></motion.div>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="w-[200px] transform hover:scale-x-150 mt-4 h-[200px] bg-yellow-300"
      ></div>
      <div className="w-[200px] mt-4 h-[200px] animate-fade-right animate-infinite bg-yellow-300"></div>

      
    </div>
  );
 
};

export default Contact;
