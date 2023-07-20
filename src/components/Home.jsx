import React from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { useState } from "react";
// import pfp from "../assets/PFP.webp";
import { NavLink } from "react-router-dom";
import NavLinks from "../constants/Index";
import Contact from "../constants/Contact";
const list = {
  open: { x: 2, opacity: 1 },
  close: { x: "-30%", opacity: 0 },
};
const Home = () => {
  const [state, setState] = useState(false);
  return (
    <div className="py-6 pb-14 sm:pb-6 px-8 sm:px-0 relative flex z-10 md:items-center m-2 ss:m-3 sm:m-6 md:m-12 rounded-3xl bg-white bg-opacity-40 border-white border-2">
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
              <NavLink to={`/${e.name}`}>
                <li
                  key={e.id}
                  className="hover:text-secondary rounded-lg w-full  hover:bg-white duration-100 ms-2 me-4 my-1 text-sm font-semibold cursor-pointer flex items-center mr-2 font-poppins"
                >
                  <div className="flex p-4 justify-start text-2xl">
                    {e.icon}
                  </div>
                  <motion.div
                    animate={state ? "open" : "close"}
                    variants={list}
                    className="flex"
                  >
                    {e.label}
                  </motion.div>
                </li>
              </NavLink>
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
            transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
            src={pfp}
            className="w-[100%] z-50 mb-5 sm:mb-10 md:mb-0"
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="font-poppins relative flex sm:p-3 group sm:px-6 mt-5 hover:shadow-2xl hover:shadow-primary/50 hover:bg-primary bg-secondary rounded-xl font-semibold px-5 p-3 text-[0.8rem] sm:text-[1rem] text-white"
              >
                View Works
                {/* <BsFillArrowRightCircleFill className=" ms-3 text-primary  inset-y-0 right-[-48px] my-auto absolute text-2xl animate-fade-right group-hover:animate-infinite hidden group-hover:flex animate-duration-700" /> */}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ y: 1, opacity: 1 }}
        initial={{ y: "-100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
        className="absolute bottom-[-35px] h-16 inset-x-0"
      >
        <div className="flex w-[200px]  shadow-2xl shadow-primary/50 px-4 text-primary items-center justify-around text-[2rem] bg-white rounded-full h-full mx-auto">
          {Contact.map((e) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="hover:text-secondary"
              href={e.link}
            >
              {e.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
