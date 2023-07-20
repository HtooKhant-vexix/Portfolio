
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { PiGearSixFill } from "react-icons/pi";
import { HiMail, HiBriefcase } from "react-icons/hi";
const NavLinks = [
  {
    id: 1,
    label: "Home",
    name: "",
    icon: <GoHomeFill />,
  },
  {
    id: 2,
    label: "About",
    name: "About",
    icon: <GoPersonFill />,
  },
  {
    id: 3,
    label: "Service",
    name: "Service",
    icon: <PiGearSixFill />,
  },
  {
    id: 4,
    label: "Work",
    name: "Work",
    icon: <HiBriefcase />,
  },
  {
    id: 5,
    label: "Contact",
    name: "Contact",
    icon: <HiMail />,
  },
];

export default NavLinks