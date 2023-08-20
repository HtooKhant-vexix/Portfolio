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
      <div className="md:block m-5 hidden">
        <Swiper
          className="mySwiper mx-auto min-h-[550px] "
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
        >
          {CardDetail.map(({ id, ...cardProps }) => (
            <SwiperSlide key={id}>
              <Card {...cardProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CardList;
