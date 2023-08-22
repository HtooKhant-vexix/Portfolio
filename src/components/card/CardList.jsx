import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./Card.jsx";
import CardDetail from "./CardDetail.jsx";
import "./card.css";
import { motion } from "framer-motion";
import "../../index.css";

const CardList = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: 1, opacity: 1 }}
        initial={{ y: "230px", opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 40,
          ease: "easeOut",
        }}
        className="m-5 mt-7"
      >
        <div className="mx-auto w-[85%] items-center flex justify-between mb-2 md:mb-8 ">
          <h1 className="text-primary font-bold text-2xl flex sm:text-3xl md:text-4xl">
            Projects
          </h1>
          <motion.h1
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-primary text-lg md:text-2xl py-2 px-4 hover:bg-primary hover:text-white duration-100 border border-primary rounded-lg "
          >
            View all works
          </motion.h1>
        </div>
        <Swiper
          className="mySwiperf justify-center flex mx-auto min-h-[590px] "
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1130px",
            lg: "1250px",
            xl: "1700px",
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1130: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          // modules={[Pagination]}
          // className="mySwiper"
        >
          {CardDetail.slice(0, 4).map(({ id, ...cardProps }) => (
            <SwiperSlide
              whileInView={{ y: 1, opacity: 1 }}
              initial={{ y: "200px", opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                ease: "easeOut",
              }}
              key={id}
              className=""
            >
              <Card {...cardProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default CardList;
