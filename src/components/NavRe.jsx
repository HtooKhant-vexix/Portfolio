import React from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavLinks from "../constants/Index";
import { useState, useEffect } from "react";

const NavRe = () => {
   const [show, setShow] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);

   const controlNavbar = () => {
     if (typeof window !== "undefined") {
       if (window.scrollY > lastScrollY ) {
         // if scroll down hide the navbar
         setShow(true);
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
      className={`active ${
        show && "-translate-y-40"
      } delay-500 duration-500 fixed w-full z-50`}
    >
      <div className="w-full flex z-40 justify-center relative backdrop-blur-md bg-white bg-opacity-80 ">
        <div className="container  flex items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="">
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
        </div>
      </div>
    </div>
  );
};

export default NavRe;
