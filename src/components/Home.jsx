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
    <div className="py-6 px-8 sm:px-0  flex z-10 md:items-center m-2 ss:m-3 sm:m-6 md:m-12 rounded-3xl bg-white bg-opacity-40 border-white border-2">
      {/* sidebar  */}
      <motion.div
        whileInView={{ opacity: 1, x: 1 }}
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        className="absolute"
      >
        <div className=" justify-center hidden sm:flex   z-10 items-start flex-col">
          <img className="h-[70px] mb-4 ml-4 z-0" src={logo} alt="" />
          <ul
            onMouseEnter={() => {
              setState(true);
            }}
            onMouseLeave={() => {
              setState(false);
            }}
            className="list-none z-0  mt-16 md:mt-0   w-[150px] items-start flex-col text-primary justify-center flex-1"
          >
            {NavLinks.map((e) => (
              <li
                key={e.id}
                className="hover:text-secondary rounded-lg w-full  hover:bg-white duration-100 ms-2 me-4 my-1 text-sm font-semibold cursor-pointer flex items-center mr-2 font-poppins"
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
      </motion.div>

      {/* hero */}
      <div className="justify-around flex-wrap flex w-full mx-auto">
        <div className="md:me-[-60px] w-[32rem] lg:me-[-140px]">
          <motion.img
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0, opacity: 0.5 }}
            transition={{ type: "spring", stiffness: 60,delay:0.1 }}
            src={pfp}
            className="w-[100%] z-50 mb-10 md:mb-0"
            alt=""
          />
        </div>
        <motion.div
          whileInView={{ x: 1, opacity: 1 }}
          initial={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
          className="flex flex-col text-center md:text-start justify-center w-[570px]"
        >
          <div className="w-[100%]">
            <div className="font-poppins text-primary leading-5 text-[23px] xs:text-[27px] ss:text-[30px] sm:text-[35px]">
              Hello, I am
              <span className="text-primary font-semibold"> Htoo Khant</span>
            </div>

            <h1 className="text-gradient font-bold text-[28px] ss:text-[45px] xs:text-[38px] sm:text-[55px] inline-block">
              Front-end Developer
            </h1>
            <h1 className="text-primary xs:w-[85%] sm:w-[95%] mx-auto flex w-[100%] md:w-[98%] lg:[100%] text-[17px] text-center md:text-start ss:text-[20px] sm:text-[25px] md:text-[25px]">
              A developer who delivers fast and reliable websites. I care about
              your business values and targeted customers to meet your golden
              goals for tomorrow.
            </h1>
            <div className="flex justify-center md:justify-start">
              <motion.button className="font-poppins flex p-4 px-6 mt-5 bg-secondary rounded-full font-semibold sm:text-[0.7] md:text-[1rem] text-white">
                View Works
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
