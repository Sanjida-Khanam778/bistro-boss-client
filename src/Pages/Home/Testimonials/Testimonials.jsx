import React, { useEffect, useState } from "react";
import SharedTitle from "../../../Components/SharedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SharedTitle
        title={"TESTIMONIALS"}
        subtitle={"---What Our Clients Say---"}
      ></SharedTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-24 flex justify-center flex-col items-center mb-16">
              <Rating style={{ maxWidth: 180 }} value={review.rating} />
              <FaQuoteLeft className="text-7xl mt-10"></FaQuoteLeft>
              <p className="mt-10">{review.details}</p>
              <h3 className="text-2xl text-yellow-600">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
