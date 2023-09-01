import React from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavLinks from "../constants/Index";
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [chg, setChg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
        setChg(false);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div
      className={` ${
        show && "-translate-y-40"
      } delay-100 duration-500 fixed w-full z-50`}
    >
      <div className="w-full flex z-40 justify-center relative backdrop-blur-md bg-white bg-opacity-80 ">
        <div className="container relative flex items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="ms-3">
            <img className="h-[70px]" src={logo} alt="" />
          </motion.div>
          <ul className="list-none sm:flex hidden text-primary justify-end items-center flex-1">
            {NavLinks.map((e) => (
              <NavLink to={`/${e.name}`} key={e.id}>
                {/* <a href={`/${e.name}`} key={e.id}> */}
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  key={e.id}
                  className="hover:text-secondary cursor-none duration-75 items-center py-8 text-sm font-semibold flex px-6 mr-2 font-poppins"
                >
                  <div className="flex me-2 text-2xl">{e.icon}</div>
                  {e.label}
                </motion.li>
                {/* </a> */}
              </NavLink>
            ))}
          </ul>
          <div onClick={() => setChg(!chg)} className="sm:hidden ms-auto me-8">
            {chg ? (
              <MdClose className="text-4xl duration-100 text-primary" />
            ) : (
              <HiMenu className="text-4xl duration-100 text-primary" />
            )}
          </div>
          {/* {chg && !show ? ( */}
          <div
            className={`w-[90%] mx-auto ${
              chg && !show && " translate-y-[330px] "
            } mt-[-330px] z-30 inset-x-0 rounded-xl p-2 duration-500 bg-white/70 backdrop-blur-md fixed`}
          >
            <ul className="list-none sm:hidden grid grid-cols-2 gap-2 text-primary justify-end text-center items-center flex-col">
              {NavLinks.map((e) => (
                <NavLink to={`/${e.name}`} key={e.id}>
                  {/* <a href={`/${e.name}`} key={e.id}> */}
                  <motion.li
                    // whileHover={{ scale: 1.2 }}
                    // key={e.id}
                    className="hover:text-secondary justify-center cursor-none duration-75 items-center text-sm font-semibold flex p-6 font-poppins"
                  >
                    <div className="flex me-2 text-2xl">{e.icon}</div>
                    {e.label}
                  </motion.li>
                  {/* </a> */}
                </NavLink>
              ))}
            </ul>
          </div>
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
