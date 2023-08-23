import React from "react";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavLinks from "../constants/Index";


const Nav = () => {
  return (
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
  );
};

export default Nav;
