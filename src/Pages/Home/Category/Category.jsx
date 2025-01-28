import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SharedTitle from "../../../Components/SharedTitle";
const Category = () => {
  return (
   <section>
    <SharedTitle title='ORDER ONLINE' subtitle='---From 11:00am to 10:00pm---'></SharedTitle>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h2 className="text-4xl uppercase text-center text-white -mt-20">
          Salads
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h2 className="text-4xl uppercase text-center text-white -mt-20">
          Pizzas
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h2 className="text-4xl uppercase text-center text-white -mt-20">
          soups
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h2 className="text-4xl uppercase text-center text-white -mt-20">
          deserts
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h2 className="text-4xl uppercase text-center text-white -mt-20 mb-10">
          Salads
        </h2>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default Category;
