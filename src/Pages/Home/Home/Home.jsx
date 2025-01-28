import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularItem from "../PopularItem/PopularItem";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
          <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-screen-lg mx-auto">
        <Category></Category>
        <PopularItem></PopularItem>
      </div>
      <Featured></Featured>
      <div className="max-w-screen-lg mx-auto">

      <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
