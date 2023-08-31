import React, { useEffect } from "react";
import Landing from "./Landing";
import ScrollToTop from "../ScrollToTop";
import responsive from "../../assets/responsive-design.png";
import react from "../../assets/physics.png";
import code from "../../assets/programming.png";
import proto from "../../assets/prototyping.png";
import "../../index.css";
import { easeOut, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import NavRe from "../NavRe";

const Service = () => {
  const serviceDate = [
    {
      id: 1,
      title: "Responsive Design",
      desc: "Responsiveness of a website plays an important role at userexperience. I ensure my design is looking good on any kindof devices.",
      img: <img src={responsive} className="w-[40%] mx-auto" alt="" />,
      dl: 0,
    },
    {
      id: 2,
      title: "Prototyping",
      desc: "Start with identifying customer requirements and prototyping to meet project goals before diving into actual development.",
      img: <img src={proto} className="w-[40%] mx-auto" alt="" />,
      dl: 0.3,
    },
    {
      id: 3,
      title: "Design to Code",
      desc: "If web design is already crafted, I am here to convert Figma, PSD, and Xd templates into well-performed websites.",
      img: <img src={code} className="w-[40%] mx-auto" alt="" />,
      dl: 0,
    },
    {
      id: 4,
      title: "Front-end Development",
      desc: "I use React.js to build scalable, reusable, maintainable, and to provide fast Single Page Applications.",
      img: <img src={react} className="w-[40%] mx-auto" alt="" />,
      dl: 0.3,
    },
  ];

    // let location = useLocation();

    // useEffect(() => {
    //   window.location.reload();
    // }, [location.pathname]);

  return (
    <>
      <NavRe/>
      <div>
        <div className="">
          <Landing />
        </div>
        <div className="sm:mt-20 mt-14 mb-8 sm:mb-10">
          <div className=" flex justify-center mx-auto mb-14 sm:mb-20 text-5xl sm:text-7xl text-primary font-bold ">
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              // viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="text-gradient"
            >
              WHAT I DO
            </motion.div>
          </div>
          <div className="grid w-[85%] sm:w-[70%] mx-auto lg:gap-10 gap-5  sm:grid-cols-2">
            {serviceDate.map(({ id, title, desc, img, dl }) => (
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 180, opacity: 0 }}
                // viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 40,
                  delay: dl,
                }}
                className="flex flex-col justify-center items-center"
              >
                <div
                  key={id}
                  className="bg-white bg-opacity-40 hover:bg-opacity-50 hover:shadow-lg duration-150 hover:shadow-primary/20 px-5 pb-14 py-12 text-center rounded-xl"
                >
                  {img}
                  <div className="mt-6 text-primary">
                    <div className="text-xl md:text-3xl font-bold mb-4">
                      {title}
                    </div>
                    <div className="md:text-xl w-[90%] mx-auto ">{desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
