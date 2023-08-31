import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../card/Card.jsx";
import CardDetail from "../card/CardDetail.jsx";
import Work from "./Work.jsx";
import NavRe from "../NavRe.jsx";
import { useState } from "react";
import Title from "antd/es/skeleton/Title.js";
import WorkCard from "./WorkCard.jsx";

const Works = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <NavRe />
      <div>
        <div className="m-0 p-0">
          <motion.div
            whileInView={{ y: 1, opacity: 1 }}
            initial={{ y: "-190px", opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              ease: "easeOut",
            }}
            className="landBg pt-24 h-[300px] sm:h-[500px] flex justify-center items-center"
          >
            <div className="flex mx-4 flex-col bg-primary shadow-primary/50 shadow-2xl bg-opacity-30 backdrop-blur-lg sm:py-16 px-10 py-5 sm:px-20 rounded-3xl items-center">
              <div className="text-5xl sm:text-7xl text-[#fafafa] font-bold">
                My Works
              </div>
              <div className=" text-[#fafafa] mt-4 sm:mt-7 sm:text-2xl font-semibold  text-center">
                The followings are my practical and personal projects.
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" mt-20 flex justify-center mx-auto mb-14 sm:mb-14 text-5xl sm:text-7xl text-primary font-bold ">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-gradient"
          >
            Recent Works
          </motion.div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 p-10">
          {CardDetail.map(({ id, ...cardProps }) => (
            <motion.div
              layoutId={id}
              onClick={() => setSelectedId(id)}
              // whileInView={{ y: 1, opacity: 1 }}
              // initial={{ y: "200px", opacity: 0 }}
              // viewport={{ once: true }}
              // transition={{
              //   type: "spring",
              //   stiffness: 40,
              //   ease: "easeOut",
              // }}
              key={id}
              className=""
            >
              <Work {...cardProps} />
            </motion.div>
          ))}
        </div>
        <div className="fixed top-0">
          <AnimatePresence className="">
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                className="detailed-card bg-primary/10 bg-opacity-30 backdrop-blur-md w-full h-screen"
                exit={{ opacity: 0, scale: 0.5 }}
              >
                {/* Render the details for the selected card */}
                <motion.div className="">
                  {(() => {
                    const selectedCard = CardDetail.find(
                      (card) => card.id === selectedId
                    );
                    return (
                      <WorkCard
                        {...selectedCard}
                        setSelectedId={setSelectedId}
                      />
                    );
                  })()}
                </motion.div>

                <motion.button onClick={() => setSelectedId(null)}/>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 mb-20 p-10">
        {CardDetail.map(({ id, ...cardProps }) => (
          <div
            // whileInView={{ y: 1, opacity: 1 }}
            // initial={{ y: "200px", opacity: 0 }}
            // viewport={{ once: true }}
            // transition={{
            //   type: "spring",
            //   stiffness: 40,
            //   ease: "easeOut",
            // }}
            key={id}
            className=""
          >
            <Work {...cardProps} />
          </div>
        ))}
      </div> */}
      </div>
    </>
  );
};

export default Works;
