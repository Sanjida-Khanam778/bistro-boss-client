import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const axiosPublic = useAxiosPublic();
    createUser(data.email, data.password).then((res) => {
      const user = res.user;
      console.log(user);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-500">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be more than or qual to 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must be at least one uppercase letter, one lowercase
                  letter, one special character and a number
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="px-6">
            Already have an account? please <Link to={"/login"}>Login</Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
