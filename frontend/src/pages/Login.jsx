import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
		password: ""
	});

  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

  const { login } = useContext(AuthContext);

  const fetchUser = async (email, password) => {
		try {
			const response = await fetch("http://127.0.0.1:8000/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: {email, password},
			});
      console.log(response)

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
      return await response.json();
		} catch (error) {
      console.log(error)
    }
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    //const user=  await fetchUser(formData.email, formData.password)
    const user = [{email:"admin@admin.com", password:"12345"}]
    if (user.length>0){
       login(user[0]);
    } else {
      alert("Kullanıcı bilgileri yanlış");
    }
  };
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center ">
        <div className="flex justify-center items-center mt-2 gap-2 ">
          <span className="w-[6px] h-[39px] bg-yellow-500 "></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase ">
            Hotel App
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-[600] text-[22px] ">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label mt-1">
            Enter your credentials to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-left p-3 gap-5 "
        >
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin@admin.com'] hover:after:text-black hover:after:pl-3 hover:after:underline"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="login-input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['admin'] hover:after:text-black hover:after:pl-3 hover:after:underline"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
          </div>
          <button className="bg-main h-[44px] font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[4px] ">
            Sign In
          </button>
          <p className="flex justify-center items-center flex-wrap">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              Forgot your password?
            </span>
            <span className="text-main text-[14px] font-montserrat font-[500] underline ml-1 ">
              Reset password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
