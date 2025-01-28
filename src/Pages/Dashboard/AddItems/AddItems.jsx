import React from "react";
import SharedTitle from "../../../Components/SharedTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    console.log(res.data)
    if(res.data.success){
        const menuItem = {
            name: data.name,
            recipe: data.recipe,
            category: data.category,
            price: parseFloat(data.price),
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem)
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been added`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
  };
  return (
    <div>
      <SharedTitle title={"ADD AN ITEM"} subtitle={"What's new?"}></SharedTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                {...register("name", {required: true})}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select defaultValue={'default'}
                  {...register("category", {required: true})}
                  className="select select-bordered w-full"
                >
                  <option disabled value={'default'}>
                    Select a category
                  </option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soup</option>
                  <option value={"desserts"}>Desserts</option>
                  <option value={"drinks"}>Drinks</option>
                  <option>Greedo</option>
                </select>
              </label>
            </div>

            {/* price */}
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  {...register("price", {required: true})}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

         <div>
         <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", {required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
         </div>
         <div className="form-controm w-full my-6">
         <input {...register("image", {required: true})} type="file" className="file-input w-full" />

         </div>
         <button className="btn">Add Items <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
