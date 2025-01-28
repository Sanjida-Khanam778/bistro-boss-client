import React from "react";
import SharedTitle from "../../../Components/SharedTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="my-20 featured bg-fixed pt-10 pb-20">
      <SharedTitle
        title="FROM OUR MENU"
        subtitle="---Check it out---"
      ></SharedTitle>
      <div className="flex items-center gap-10 max-w-screen-lg mx-auto">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="text-white">
          <p className="text-2xl">March 20, 2023</p>
          <p className="text-2xl">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="px-6 py-3 mt-4 uppercase border-b-[3px] border-white rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
