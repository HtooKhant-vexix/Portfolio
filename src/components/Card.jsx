import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import "../index.css";
import { motion } from "framer-motion";
import CardDetail from "./CardDetail.jsx";
import { useState } from "react";
// import img from "../assets/62d530867556588cd0f37242_hero-bg.webp";

const Card = () => {
  // const str = false;
  // const strChange = ()=> !str;
  // const hoverHandle = useRef();
  // hoverHandle.current.hover(strChange);
  const [str, setStr] = useState(true);
  const strChange = () => setStr((prevStr) => !prevStr);
  const reStrChange = () => setStr((prevStr) => !prevStr);

  return CardDetail.map((e) => (
    <div className="p-9">
      <motion.div
        onMouseEnter={strChange}
        onMouseLeave={reStrChange}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="w-[400px] group hover:shadow-primary/50 hover:shadow-2xl duration-100 relative rounded-3xl p-3 z-40  bg-white"
      >
        <div className="relative group py-1 z-40 px-1">
          {/* <img
            className="object-cover group-hover:z-50 z-40 rounded-t-2xl w-full object-center h-[200px]"
            src="../assets/62d530867556588cd0f37242_hero-bg.webp"
            // src={img}
            alt="kcard-img"
          /> */}
          <div className="h-[200px] overflow-hidden z-40 rounded-t-2xl">
            {e.img}
          </div>
          <div className=" w-[80px] h-[80px] bg-white shadow-xl shadow-secondary/10 z-40 bottom-[-27px] right-8 rounded-xl absolute">
            {e.logo}
          </div>
        </div>
        <div className="px-3 duration-200 bg-white z-30 relative pb-3 pt-7">
          <h3 className=" text-2xl text-primary  w-[80%] pb-2 font-semibold">
            {e.title}
          </h3>
          <h3 className=" text-primary text-lg">
            {str ? e.desc.substring(0, 70) : e.desc}{" "}
            <p className=" inline-block text-primary/60 group-hover:hidden">
              {" "}
              . . . see more
            </p>
          </h3>
        </div>
        <div className="absolute w-full  inset-x-0 group-hover:translate-y-0 duration-300 -translate-y-24 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0">
          <hr className="my-5 w-[90%] mx-auto h-[2px] bg-primary bg-opacity-50" />
          <div className=" mt-3 justify-between w-full px-8 mx-1 flex">
            <div className=" text-primary  flex items-center">
              <AiFillGithub className="hover:text-secondary my-auto text-3xl" />
              <FaLink className="hover:text-secondary duration-100 my-auto ms-8 text-2xl" />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-lg ms-auto p-2 cursor-none px-5 text-primary border hover:shadow-primary/50 hover:shadow-xl border-primary hover:bg-primary hover:text-white duration-100 rounded-lg"
            >
              Live Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  ));
};

export default Card;
