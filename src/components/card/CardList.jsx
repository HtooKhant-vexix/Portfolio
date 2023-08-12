import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./Card.jsx";
import CardDetail from "./CardDetail.jsx";

const CardList = () => {
  return (
    <>
     <Swiper 
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper h-[550px]"
    >
      {CardDetail.map(({ id, ...cardProps }) => (
        <SwiperSlide  key={id}>
          <Card {...cardProps} />
        </SwiperSlide>
      ))}
    </Swiper>
     <Swiper
      className="mySwiper hidden "
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {CardDetail.map(({ id, ...cardProps }) => (
        <SwiperSlide  key={id}>
          <Card {...cardProps} />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
   
  );
};

export default CardList;
