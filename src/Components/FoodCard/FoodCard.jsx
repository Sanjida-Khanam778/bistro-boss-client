import React from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const [, refetch] = useCart()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const location = useLocation()
  const {user} = useAuth()
  const { _id, name, image, recipe, price } = item;
const handleAddToCart = ()=>{
  if(user && user.email){
    const cartItem = {
      menuId: _id,
      name,
      image,
      price,
      email: user.email
    }
    axiosSecure.post('/carts', cartItem)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to the cart`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    })
  }else{
    Swal.fire({
      title: "You are not logged in.",
      text: "please login to add to the cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', {state: {from: location}})
      }
    });
  }
}

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute bg-gray-900 text-white px-4 py-2 right-0 mr-6 mt-4">
          ${price}
        </p>
        <div className="card-body flex flex-col justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p className="">{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="px-6 py-3 mt-4 uppercase border-b-[3px] bg-slate-100 border-orange-400 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;