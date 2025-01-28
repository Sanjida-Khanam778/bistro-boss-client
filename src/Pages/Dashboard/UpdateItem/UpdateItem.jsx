import { useLoaderData } from "react-router-dom";
import SharedTitle from "../../../Components/SharedTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";

const UpdateItem = () => {
  const { name, recipe, price, category, _id, image } = useLoaderData();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SharedTitle
        title={"Update an item"}
        subtitle={"Refresh Item"}
      ></SharedTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                defaultValue={name}
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
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={"default"}>
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
                  {...register("price", { required: true })}
                  type="number"
                  defaultValue={price}
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
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </label>
          </div>
          <div className="form-controm w-full my-6">
            <input
            //   defaultValue={image}
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>
          <button className="btn">
            Update Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
