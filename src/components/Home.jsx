import { useState, lazy, Suspense } from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import pfp from "../assets/PFP.webp";
import { NavLink } from "react-router-dom";
import NavLinks from "../constants/Index";
import Contact from "../constants/Contact";
import { FiChevronsRight } from "react-icons/fi";
import "../index.css";
import Nav from "./Nav";

const list = {
  open: { x: 2, opacity: 1 },
  close: { x: "-30%", opacity: 0 },
};

const CardList = lazy(() => import("./card/CardList"));
const Skill = lazy(() => import("./Skill/Skill"));
const Mail = lazy(() => import("./Mail.jsx"));

const Home = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Nav />
      <div className="py-6 pb-14 sm:pb-12 md:pb-6 px-8 sm:px-0 relative flex z-10 md:items-center m-2 ss:m-3 sm:m-6 md:m-12 rounded-3xl bg-white bg-opacity-40 border-white border-2">
        {/* sidebar  */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          className="absolute"
        >
          <div className=" justify-center hidden sm:flex   z-10 items-start flex-col">
            <picture>
              <source srcSet={logo} media="(min-width: 600px)" />
              <img
                className="h-[70px] mb-4 ml-4 z-0"
                src={logo}
                alt="logo"
                loading="lazy"
              />
            </picture>
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
                <NavLink to={`/${e.name}`} key={e.id}>
                  <li
                    key={e.id}
                    className="hover:text-secondary group rounded-lg w-full  hover:bg-white duration-100 ms-2 me-4 my-1 text-sm font-semibold flex items-center mr-2 font-poppins"
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
            <picture>
              <source srcSet={pfp} media="(min-width: 600px)" />
              <img
                src={pfp}
                className="w-[100%] z-50 mb-5 sm:mb-10 md:mb-0"
                alt="profile"
                loading="lazy"
              />
            </picture>
          </div>
          <motion.div
            whileInView={{ x: 1, opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              ease: "easeOut",
              delay: 0.7,
            }}
            className="flex flex-col text-center md:text-start justify-center w-[570px]"
          >
            <div className="w-[100%]">
              <div className="font-poppins text-primary leading-6 text-[23px] xs:text-[27px] ss:text-[30px] sm:text-[35px]">
                Hello, I am
                <span className="text-primary font-semibold"> Htoo Khant</span>
              </div>

              <h1 className="text-gradient font-bold text-[30px] ss:text-[45px] xs:text-[38px] sm:text-[55px] inline-block">
                Front-end Developer
              </h1>
              <h1 className="text-primary pt-1 sm:pt-0 xs:w-[85%] sm:w-[95%] mx-auto flex w-[100%] md:w-[98%] lg:[100%] text-[17px] text-center md:text-start ss:text-[20px] sm:text-[25px] md:text-[25px]">
                My mission as a frontend developer is simple yet powerful: to
                bring your vision to life. Your success is my success, and
                I&apos;m committed to delivering results that exceed your
                expectations.
              </h1>
              <NavLink to={"/service"}>
                <div className="flex justify-center md:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    viewport={{ once: true }}
                    //  transform hover:scale-x-150
                    className="font-poppins flex sm:p-3  group sm:px-6 mt-5 relative  hover:shadow-2xl z-50 shadow-secondary/50 shadow-2xl hover:shadow-primary/50 hover:bg-primary bg-secondary rounded-xl font-semibold px-5 p-3 text-[0.8rem] sm:text-[1rem] text-white"
                  >
                    <FiChevronsRight className="text-2xl top-0 bottom-0 h-full absolute right-[-20px] group-hover:animate-fade-right group-hover:animate-infinite  hidden group-hover:flex z-50 " />
                    <div
                      style={{ transformOrigin: "left center" }}
                      className="group-hover:bg-primary duration-300 transition-transform transform group-hover:translate-x-8 absolute w-4 h-full z-10 inset-y-0 right-0 rounded-r-xl "
                    ></div>
                    <div
                      style={{ transformOrigin: "left center" }}
                      className="group-hover:bg-primary duration-300 cs transition-transform  transform group-hover:scale-x-[5.2] absolute w-2 h-full z-10 inset-y-0 right-3 "
                    ></div>
                    {/* View Works */}
                    Services
                    {/* <BsFillArrowRightCircleFill className=" ms-3 text-primary  inset-y-0 right-[-48px] my-auto absolute text-2xl animate-fade-right group-hover:animate-infinite hidden group-hover:flex animate-duration-700" /> */}
                  </motion.button>
                </div>
              </NavLink>
            </div>
          </motion.div>
        </div>
        <motion.div
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ once: true }}
          initial={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
          className="absolute bottom-[-35px] h-16 inset-x-0"
        >
          <div className="flex w-[200px]  shadow-2xl shadow-primary/50 px-4 text-primary items-center justify-around text-[2rem] bg-white rounded-full h-full mx-auto">
            {Contact.map((e) =>
              e.to ? (
                <NavLink
                  to="/Contact"
                  key={e.id}
                  className="hover:text-secondary hover:scale-110"
                >
                  {e.icon}
                </NavLink>
              ) : (
                <motion.a
                  key={e.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="hover:text-secondary"
                  href={e.link}
                  target="_blank"
                >
                  {e.icon}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
      <div className="mt-[120px] sm:mt-28">
        <Suspense fallback={<div>Loading...</div>}>
          <CardList />
          <Skill />
          <Mail />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
