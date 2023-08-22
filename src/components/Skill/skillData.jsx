import { AiFillHtml5 } from "react-icons/ai";
import {  BiLogoGithub, BiLogoSass } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiTailwindcss } from "react-icons/si";
import { LiaReact } from "react-icons/lia";
import { RxFigmaLogo } from "react-icons/rx";
import { TbBrandRedux } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { PiFramerLogoFill } from "react-icons/pi";

const sData = [
  {
    id: 1,
    title: "HTML",
    icon: <AiFillHtml5 className="mx-auto" />,
    dl: 0,
  },
  {
    id: 2,
    title: "CSS",
    icon: <FaCss3Alt className="mx-auto" />,
    dl: 0.1,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <RiJavascriptFill className="mx-auto" />,
    dl: 0.2,
  },
  {
    id: 4,
    title: "SCSS",
    icon: <BiLogoSass className="mx-auto" />,
    dl: 0.3,
  },
  {
    id: 5,
    title: "Bootstrap",
    icon: <FaBootstrap className="mx-auto" />,
    dl: 0.3,
  },
  {
    id: 6,
    title: "TailwindCSS",
    icon: <SiTailwindcss className="mx-auto" />,
    dl: 0.2,
  },
  {
    id: 7,
    title: "React.js",
    icon: <LiaReact className="mx-auto" />,
    dl: 0.1,
  },
  {
    id: 8,
    title: "Redux",
    icon: <TbBrandRedux className="mx-auto" />,
    dl: 0,
  },
  {
    id: 9,
    title: "GitHub",
    icon: <BiLogoGithub className="mx-auto" />,
    dl: 0,
  },
  {
    id: 10,
    title: "Framer",
    icon: <PiFramerLogoFill className="mx-auto" />,
    dl: 0.1,
  },
  {
    id: 11,
    title: "Figma",
    icon: <RxFigmaLogo className="mx-auto" />,
    dl: 0.2,
  },
  {
    id: 12,
    title: "Photoshop",
    icon: <SiAdobephotoshop className="mx-auto" />,
    dl: 0.3,
  },
];

export default sData;
