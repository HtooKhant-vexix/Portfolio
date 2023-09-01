import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineApi } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Card = ({ img, logo, title, desc, git, link, api, dl }) => {
  const [str, setStr] = useState(true);

  const strChange = () => setStr((prevStr) => !prevStr);
  const reStrChange = () => setStr((prevStr) => !prevStr);

  const truncatedDesc = str ? `${desc.substring(0, 70)}` : desc;
  const normalClass =
    "absolute w-full inset-x-0 duration-300 -translate-y-24 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0";
  const updateClass =
    "absolute w-full inset-x-0 shadow-primary/50 shadow-2xl translate-y-0 duration-300 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0";

  return (
    <>
      <SwiperSlide className="mx-auto p-5">
        <motion.div
          whileInView={{ y: 1, opacity: 1 }}
          initial={{ y: "200px", opacity: 0 }}
          // viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            ease: "easeOut",
            delay: dl,
          }}
          className=""
        >
          <motion.div
            onClick={strChange}
            OnClick={reStrChange}
            // onMouseEnter={strChange}
            // onMouseLeave={reStrChange}
            whileHover={{ scale: 1.05 }}
            // viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-[450px] group hidden xs:inline-block hover:shadow-primary/50 hover:shadow-2xl duration-100 relative rounded-3xl p-3 z-40 bg-white"
          >
            <div className="relative py-1 z-40 px-1">
              <div className=" object-cover overflow-hidden z-40 rounded-t-2xl">
                {img}
              </div>
              <div className="w-[80px] h-[80px] bg-white shadow-xl shadow-secondary/10 z-40 bottom-[-27px] right-8 rounded-xl absolute">
                {logo}
              </div>
            </div>
            <div className="px-3 duration-200 bg-white z-30 relative pb-3 pt-7">
              <h3 className="text-2xl text-primary w-[80%] pb-2 font-semibold">
                {title}
              </h3>
              <h3 className="text-primary text-lg">
                {/* {truncatedDesc}
                {desc.length > 70 && (
                  <p className="inline-block text-primary/60 group-hover:hidden">
                    ... see more
                  </p>
                )}
                <br />
                <p className=" bg-opacity-30 py-1 mt-2 rounded-full border border-secondary px-3 text-sm  group-hover:inline-block hidden text-secondary">
                  <DiCode className="me-1 inline-block text-2xl mx-auto my-auto" />
                  Front-end
                </p>
                {api && (
                  <p className="ms-3 bg-opacity-30 py-1 mt-2 rounded-full border border-secondary px-3 text-sm  group-hover:inline-block hidden text-secondary">
                    <AiOutlineApi className="me-1 inline-block text-lg mx-auto my-auto" />
                    Api
                  </p>
                )} */}
                {truncatedDesc}
                {truncatedDesc.length < 80 && (
                  <p className="inline-block text-primary/60 ">... see more</p>
                )}
                <br />
                {truncatedDesc.length > 80 && (
                  <p className=" bg-opacity-30 pe-4 py-1 mt-3 rounded-full border border-secondary inline-block px-2 text-xs text-secondary">
                    <DiCode className="me-1  inline-block text-lg mx-auto mt-[-1px]" />
                    Front-end
                  </p>
                )}
                {api & (truncatedDesc.length > 80) ? (
                  <p className="ms-3 bg-opacity-30 py-1 mt-2 rounded-full border border-secondary px-3 text-sm inline-block text-secondary">
                    <AiOutlineApi className="me-1 inline-block text-lg mx-auto my-auto" />
                    Api
                  </p>
                ) : null}
              </h3>
            </div>
            <div className={str ? normalClass : updateClass}>
              <hr className="my-5 w-[90%] mx-auto h-[2px] bg-primary bg-opacity-50" />
              <div className="mt-3 justify-between w-full px-8 mx-1 flex">
                <div className="text-primary flex items-center">
                  <motion.a
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    href={git}
                    className="hover:text-secondary my-auto  flex"
                  >
                    <AiFillGithub className="text-3xl" />
                    <p className="text-xl font-semibold ms-2">Git Repo</p>
                  </motion.a>
                  {/* <FaLink className="hover:text-secondary duration-100 my-auto ms-8 text-2xl" /> */}
                </div>
                <a href={link}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-lg ms-auto p-2 cursor-none px-5 text-primary border hover:shadow-primary/50 hover:shadow-xl border-primary hover:bg-primary hover:text-white duration-100 rounded-lg"
                  >
                    Live Demo
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* second  */}
        <motion.div
          onClick={strChange}
          OnClick={reStrChange}
          whileInView={{ y: 1, opacity: 1 }}
          initial={{ y: "230px", opacity: 0 }}
          // viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            ease: "easeOut",
            delay: dl,
          }}
          // whileHover={{ scale: 1.05 }}
          // transition={{ type: "spring", stiffness: 400 }}
          className="w-[450px] duration-150 group xs:hidden shadow-primary/20 shadow-xl relative rounded-3xl p-3 z-40 bg-white"
        >
          <div className="relative py-1 z-40 px-1">
            <div className=" object-cover overflow-hidden z-40 rounded-t-2xl">
              {img}
            </div>
            {logo && (
              <div className="w-[70px] h-[70px] bg-white shadow-xl shadow-secondary/10 z-40 bottom-[-27px] right-6 rounded-xl absolute">
                {logo}
              </div>
            )}
          </div>
          <div className="px-3 duration-200 bg-white z-30 relative pb-3 pt-5">
            <h3 className="text-xl text-primary w-[80%] pb-2 font-semibold">
              {title}
            </h3>
            <h3 className="text-primary text-md">
              {truncatedDesc}
              {truncatedDesc.length < 80 && (
                <p className="inline-block text-primary/60 ">... see more</p>
              )}
              <br />
              {truncatedDesc.length > 80 && (
                // <p className="inline-block text-primary/60 ">... see more</p>
                <p className=" bg-opacity-30 pe-4 py-1 mt-3 rounded-full border border-secondary inline-block px-2 text-xs text-secondary">
                  {/* <p className=" bg-opacity-30 py-1 mt-2 rounded-full border border-secondary px-3 text-sm  group-hover:inline-block hidden text-secondary"> */}
                  <DiCode className="me-1  inline-block text-lg mx-auto mt-[-1px]" />
                  Front-end
                </p>
              )}
            </h3>
          </div>
          <div className={str ? normalClass : updateClass}>
            <hr className="my-5 w-[90%] mx-auto h-[2px] bg-primary bg-opacity-50" />
            <div className="mt-3 justify-between w-full px-8 mx-1 flex">
              <div className="text-primary flex items-center">
                <motion.a
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  href={git}
                  className="hover:text-secondary my-auto  flex"
                >
                  <AiFillGithub className="text-2xl" />
                  <p className="text-lg font-semibold ms-2 mt-[-1px]">
                    Git Repo
                  </p>
                </motion.a>
                {/* <FaLink className="hover:text-secondary duration-100 my-auto ms-8 text-2xl" /> */}
              </div>
              <a href={link}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-md ms-auto p-2 cursor-none px-4 text-primary border hover:shadow-primary/50 hover:shadow-xl border-primary hover:bg-primary hover:text-white duration-100 rounded-lg"
                >
                  Live Demo
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      
    </>
  );
};

export default Card;
