import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha
} from "react-simple-captcha";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const {signIn} = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(res=>{
      const user = res.user
      console.log(user)
      Swal.fire({
              title: "User login Successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate(from, {replace: true})
    })
  };
  const handleValidateCaptcha = e =>{
    const value = e.target.value
    console.log(value)
    if(validateCaptcha(value)){
        setDisabled(false)
    }else{
        setDisabled(true)
    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="password"
                
                onBlur={handleValidateCaptcha}
                placeholder="Type a captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>
          <p className="px-6">Don't have any account? please <Link to={'/signup'}>SignUp</Link></p>
          <SocialLogin></SocialLogin>
          <Link to={'/'}><p className="p-4 hover:bg-orange-600 btn m-5 mt-0 bg-orange-500 text-white">Go to Home</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;