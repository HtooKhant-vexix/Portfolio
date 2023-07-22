
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { PiGearSixFill } from "react-icons/pi";
import { HiMail, HiBriefcase } from "react-icons/hi";
const NavLinks = [
  {
    id: 1,
    label: "Home",
    name: "",
    icon: (
      <GoHomeFill className="group-hover:animate-bounce group-hover:animate-reverse  group-hover:animate-infinite" />
    ),
  },
  {
    id: 2,
    label: "About",
    name: "About",
    icon: (
      <GoPersonFill className="group-hover:animate-jump  group-hover:animate-duration-[1500ms] group-hover:animate-infinite" />
    ),
  },
  {
    id: 3,
    label: "Service",
    name: "Service",
    icon: (
      <PiGearSixFill className="group-hover:animate-spin group-hover:animate-duration-[1500ms] group-hover:animate-infinite" />
    ),
  },
  {
    id: 4,
    label: "Work",
    name: "Work",
    icon: (
      <HiBriefcase className="group-hover:animate-wiggle-more  group-hover:animate-infinite" />
    ),
  },
  {
    id: 5,
    label: "Contact",
    name: "Contact",
    icon: (
      <HiMail className="group-hover:animate-jump group-hover:animate-duration-[1000ms] group-hover:animate-fill-forwards group-hover:animate-infinite" />
    ),
  },
];

export default NavLinks