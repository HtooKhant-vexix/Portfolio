import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineApi } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import { RiCloseCircleFill } from "react-icons/ri";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const WorkCard = ({
  img,
  logo,
  title,
  desc,
  git,
  link,
  api,
  dl,
  setSelectedId,
}) => {
  const [str, setStr] = useState(true);
  const [scroll, setScroll] = useState(0);

  const strChange = () => setStr((prevStr) => !prevStr);
  const reStrChange = () => setStr((prevStr) => !prevStr);

  const truncatedDesc = str ? `${desc.substring(0, 70)}` : desc;
  const normalClass =
    "absolute w-full inset-x-0 duration-300 -translate-y-24 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0";
  const updateClass =
    "absolute w-full inset-x-0 shadow-primary/50 shadow-2xl translate-y-0 duration-300 bg-white pb-5 rounded-b-3xl pt-32 bottom-[-80px] z-0";

  const onClickHandler = () => setSelectedId(null);

  return (
    <>
      <motion.div className="sm:hidden">
        <div className="mx-auto w-[98%] xs:w-[85%] p-5 flex items-center ">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className="h-screen flex items-center"
          >
            <motion.div className="w-[100%] group inline-block mt-[-40px] shadow-primary/50 shadow-2xl duration-100 relative rounded-3xl p-3 z-40 bg-white">
              <div className="relative py-1 z-40 px-1">
                <div className=" object-cover overflow-hidden z-40 rounded-t-2xl">
                  {img}
                </div>
                {logo && (
                  <div className="w-[70px] h-[70px] bg-white shadow-xl shadow-secondary/10 z-40 bottom-[-27px] right-6 rounded-xl absolute">
                    {logo}
                  </div>
                )}
                <motion.button
                  onClick={onClickHandler}
                  className="ms-5 absolute right-[-25px] bg-white duration-150  hover:bg-secondary shadow-xl shadow-secondary/40 top-[-25px] rounded-full inline-block text-xs "
                >
                  <RiCloseCircleFill className="text-5xl text-secondary hover:text-white duration-150" />
                </motion.button>
              </div>
              <div className="px-3 duration-200 bg-white z-30 relative pb-3 pt-7">
                <h3 className="text-2xl text-primary w-[80%] pb-2 font-semibold">
                  {title}
                </h3>
                <h3 className="text-primary text-lg">
                  {desc}
                  <br />
                  <p className=" bg-opacity-30 pe-4 py-1 mt-3 rounded-full border border-secondary inline-block px-2 text-xs text-secondary">
                    <DiCode className="me-1  inline-block text-lg mx-auto mt-[-1px]" />
                    Front-end
                  </p>
                  {/* // )} */}
                  {api && (
                    <p className="ms-3 bg-opacity-30 py-1 mt-2 rounded-full border border-secondary px-3 text-sm inline-block text-secondary">
                      <AiOutlineApi className="me-1 inline-block text-lg mx-auto my-auto" />
                      Api
                    </p>
                  )}
                </h3>
              </div>
              <div className={updateClass}>
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
        </div>
      </motion.div>

      {/* second */}

      <motion.div className="hidden sm:block">
        <div className="mx-auto w-[90%] lg:w-[80%] p-5 flex items-center ">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className="h-screen flex items-center"
          >
            <motion.div className="w-[100%] flex group shadow-primary/30 shadow-xl duration-100 relative rounded-3xl p-3  z-40 bg-white">
              <div className=" w-[100%] py-1 z-40 flex my-auto px-1">
                <div className=" object-cover overflow-hidden z-40 rounded-2xl">
                  {img}
                </div>
                {/* {logo && (
                  <div className="w-[70px] h-[70px] bg-white shadow-xl shadow-secondary/10 z-40 bottom-[-27px] right-6 rounded-xl absolute">
                    {logo}
                  </div>
                )} */}
              </div>
              <div className="px-3 flex flex-col duration-200 bg-white z-30 relative ps-7  py-3 ">
                <div className="relative">
                  <motion.button
                    onClick={onClickHandler}
                    className="ms-5 absolute right-[-30px] bg-white duration-150  hover:bg-secondary shadow-xl shadow-secondary/40 top-[-30px] rounded-full inline-block text-xs "
                  >
                    <RiCloseCircleFill className="text-5xl text-secondary hover:text-white duration-150" />
                  </motion.button>
                  <h3 className="text-3xl flex items-center text-primary pb-2 font-semibold">
                    {logo && (
                      <div className="w-[70px] me-5  h-[70px] bg-white shadow-xl shadow-secondary/20 z-40 bottom-[-27px] right-6 rounded-xl">
                        {logo}
                      </div>
                    )}
                    {title}
                  </h3>
                  <div className="">
                    <h3 className="text-primary w-[90%] mt-2 text-xl">
                      {desc}
                      <br />
                      <p className=" bg-opacity-30 pe-4 py-1 mt-3 rounded-full border border-secondary inline-block px-2 text-xs text-secondary">
                        <DiCode className="me-1  inline-block text-lg mx-auto mt-[-1px]" />
                        Front-end
                      </p>
                      {/* // )} */}
                      {api && (
                        <p className="ms-3 bg-opacity-30 py-1 mt-2 rounded-full border border-secondary px-3 text-sm inline-block text-secondary">
                          <AiOutlineApi className="me-1 inline-block text-lg mx-auto my-auto" />
                          Api
                        </p>
                      )}
                    </h3>
                  </div>
                </div>
                <div className="mt-auto justify-between w-full pe-4 mx-1 flex">
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
              {/* <div className={updateClass}>
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
              </div> */}
            </motion.div>
          </motion.div>

          {/* second  */}
        </div>
      </motion.div>

      {/* <motion.div className="hidden sm:block">

      </motion.div> */}
    </>
  );
};

export default WorkCard;
