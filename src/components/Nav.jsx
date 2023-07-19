import React from "react";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { PiGearSixFill } from "react-icons/pi";
import { HiMail, HiBriefcase } from "react-icons/hi";
import logo from "../assets/logo2.png";
import { motion } from "framer-motion";
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

const Nav = () => {
  return (
    <div className="container flex items-center">
      <motion.div
      whileHover={{scale:1.2}}
      className="">
        <img className="h-[70px]" src={logo} alt="" />
      </motion.div>
      <ul className="list-none sm:flex hidden text-primary justify-end items-center flex-1">
        {NavLinks.map((e) => (
          <motion.li
            whileHover={{scale:1.2}}
            key={e.id}
            className="hover:text-secondary duration-100 items-center py-8 text-sm font-semibold cursor-pointer flex px-6 mr-2 font-poppins"
          >
            <div className="flex me-2 text-2xl">{e.icon}</div>
            {e.label}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
