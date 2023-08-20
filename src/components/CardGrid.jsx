import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import nftLogo from "../assets/logo2.png";
import img from "../assets/62d530867556588cd0f37242_hero-bg.webp";

const favCard = [
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={img}
        alt="err"
        className="object-cover hover:scale-105 duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0,
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
    active: true,
  },
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={img}
        alt="err"
        className="object-cover hover:scale-105 duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0.2,
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
    active: true,
  },
  {
    id: 1,
    title: "NFT Marketplace",
    desc: "Buy and sell digital art NFT collection. Everything you need to build, host, scale amazing dapps free by creating account",
    img: (
      <img
        src={img}
        alt="err"
        className="object-cover hover:scale-105 duration-100  group-hover:z-50 w-full object-center"
      />
    ),
    dl: 0.3,
    logo: <img src={nftLogo} alt="err" className="p-2 ps-3 " />,
    active: false,
  },
];

const CardGrid = () => {
  return (
    <>
      <div className="mx-auto w-[85%] flex justify-between mb-8 ">
        <h1 className="text-primary font-bold text-4xl">Projects</h1>
        <h1 className="text-primary text-2xl py-2 px-4 border border-primary rounded-md ">
          View all works
        </h1>
      </div>
      <div className="flex flex-wrap justify-around w-[95%] left-0 right-0 mx-auto  absolute">
        {favCard.map((e) => {
          const [str, setStr] = useState(true);

          const strChange = () => setStr((prevStr) => !prevStr);
          const reStrChange = () => setStr((prevStr) => !prevStr);

          const truncatedDesc = str ? `${e.desc.substring(0, 70)}` : e.desc;

          return (
            <motion.div
              whileInView={{ y: 1, opacity: 1 }}
              initial={{ y: "200px", opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: e.dl,
                ease: "easeOut",
              }}
              key={e.id}
              className={
                e.active
                  ? "min-w-[390px] max-w-[390px]"
                  : "min-w-[390px] max-w-[390px] hidden lg:block"
              }
              // className="min-w-[430px] max-w-[430px]"
            >
              <motion.div
                onMouseEnter={strChange}
                onMouseLeave={reStrChange}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className=" group hover:shadow-primary/50 hover:shadow-2xl duration-100 relative rounded-3xl p-3 z-40 bg-white"
              >
                <div className="relative py-1 z-40 px-1">
                  <div className="h-[200px] overflow-hidden z-40 rounded-t-2xl">
                    {e.img}
                  </div>
                  <div className="w-[80px] h-[80px] bg-white shadow-xl shadow-secondary/10 z-40 bottom-[-27px] right-8 rounded-xl absolute">
                    {e.logo}
                  </div>
                </div>
                <div className="px-3 duration-200 bg-white z-30 relative pb-3 pt-7">
                  <h3 className="text-2xl text-primary w-[80%] pb-2 font-semibold">
                    {e.title}
                  </h3>
                  <h3 className="text-primary text-lg">
                    {truncatedDesc}{" "}
                    {e.desc.length > 70 && (
                      <p className="inline-block text-primary/60 group-hover:hidden">
                        ... see more
                      </p>
                    )}
                  </h3>
                </div>
                <div className="absolute w-full inset-x-0 group-hover:translate-y-0 duration-300 -translate-y-24 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0">
                  <hr className="my-5 w-[90%] mx-auto h-[2px] bg-primary bg-opacity-50" />
                  <div className="mt-3 justify-between w-full px-8 mx-1 flex">
                    <div className="text-primary flex items-center">
                      <AiFillGithub className="hover:text-secondary my-auto text-3xl" />
                      <FaLink className="hover:text-secondary duration-100 my-auto ms-8 text-2xl" />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="text-lg ms-auto p-2 cursor-none px-5 text-primary border hover:shadow-primary/50 hover:shadow-xl border-primary hover:bg-primary hover:text-white duration-100 rounded-lg"
                    >
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default CardGrid;
