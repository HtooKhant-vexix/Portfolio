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
    <div className="h-[600px] flex items-center m-16 mt-10 rounded-3xl bg-white bg-opacity-40 border-white border-2">
      {/* sidebar  */}
      <div className=" justify-center absolute sm:flex hidden items-start flex-col">
        <img className="h-[70px] mb-4 ml-4" src={logo} alt="" />
        <ul
          onMouseEnter={() => {
            setState(true);
          }}
          onMouseLeave={() => {
            setState(false);
          }}
          className="list-none  w-[150px] items-start flex-col text-primary justify-center flex-1"
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
      <div className="text-[6rem] justify-center flex-wrap flex w-full mx-auto font-poppins font-bold ">
        <div className="md:me-28 lg:me-36">
          <img src={pfp} className="h-[30rem]" alt="" />
        </div>
        <div className="min-w-[250px] w-[450px] bg-red-300 ">
          <h1 className="text-gradient inline-block"> hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
