import React from "react";
import logo from "../assets/logo2.png";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { PiGearSixFill } from "react-icons/pi";
import { HiMail, HiBriefcase } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import pfp from "../assets/PFP.png";
const list = {
  open: { x: 2, opacity: 1 },
  close: { x: "-30%", opacity: 0 },
};
const NavLinks = [
  {
    id: 1,
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    id: 2,
    label: "About",
    icon: <GoPersonFill />,
  },
  {
    id: 3,
    label: "Service",
    icon: <PiGearSixFill />,
  },
  {
    id: 4,
    label: "Work",
    icon: <HiBriefcase />,
  },
  {
    id: 5,
    label: "Contact",
    icon: <HiMail />,
  },
];

const Home = () => {
  const [state, setState] = useState(false);
  return (
    <div className="h-[600px] flex z-10 items-center m-12 mt-10 rounded-3xl bg-white bg-opacity-40 border-white border-2">
      {/* sidebar  */}
      <div className=" justify-center absolute z-[2] sm:flex hidden items-start flex-col">
        <img className="h-[70px] mb-4 ml-4 z-0" src={logo} alt="" />
        <ul
          onMouseEnter={() => {
            setState(true);
          }}
          onMouseLeave={() => {
            setState(false);
          }}
          className="list-none z-0  w-[150px] items-start flex-col text-primary justify-center flex-1"
        >
          {NavLinks.map((e) => (
            <li
              key={e.id}
              className="hover:text-secondary rounded-lg w-full hover:bg-white duration-100 ms-2 me-4 my-1 text-sm font-semibold cursor-pointer flex items-center mr-2 font-poppins"
            >
              <div className="flex p-4 justify-start text-2xl">{e.icon}</div>
              <motion.div
                animate={state ? "open" : "close"}
                variants={list}
                className="flex"
              >
                {e.label}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
      {/* hero */}
      <div className="justify-around flex-wrap flex w-full mx-auto">
        <div className="md:me-[-60px] w-[32rem]  lg:me-[-140px]">
          <img src={pfp} className="w-[100%]" alt="" />
        </div>
        <div className="flex flex-col  justify-center w-[570px]">
          <div className="w-[100%]">
            <div className="font-poppins text-primary leading-5 text-[30px]">
              Hello, I am <span className="text-primary font-semibold">Htoo Khant</span>
            </div>

            <h1 className="text-gradient font-bold text-[55px] inline-block">
              Front-end Developer
            </h1>
            <h1 className="text-primary flex w-[95%] text-[25px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aut
              provident obcaecati dolorum adipisci pariatur quis totam minus non
              nobis?
            </h1>
            <motion.button
              whileHover={{scaleX:2}}
              className="font-poppins flex p-4 px-6 mt-5 bg-secondary rounded-full font-semibold text-[1rem] text-white"
            >
              View Works
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
