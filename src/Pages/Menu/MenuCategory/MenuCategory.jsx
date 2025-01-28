import React from "react";
import MenuItem from "../../../Components/MenuItem";
import Cover from "../../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, subtitle }) => {
  return (
    <div className="pt-8 my-12">
      {title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {
        title && <Link to={`/order/${title}`}> <button className="px-6 py-3 mt-4 uppercase border-b-[3px] border-black rounded-lg">
        Order Now
      </button></Link>
      }
    </div>
  );
};

export default MenuCategory;
