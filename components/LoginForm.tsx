import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Router from "next/router";
import { login } from "../store/actions/authActions";
const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    console.log("cominghere");
    let dataLogin = await dispatch(login({ email, password }));
  };
  useEffect(() => {
    console.log("this one is running");
    if (state.auth.isAuthenticated) {
      console.log("coming here");
      Router.push("/");
      toast.success("Sign in successfully", {
        position: "bottom-left",
        autoClose: 10000,
        toastId: "signinsuccess",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else return;
  }, [state.auth.isAuthenticated]);
  return (
    <div className="container mx-auto">
      <form
        className="space-y-5 w-1/2 mx-auto mt-20 shadow-2xl p-5 text-blue-500"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="email">Enter the email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="w-full  outline-none px-3 py-4 rounded-2xl  text-blue-500 bg-gray-100"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Enter the password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="w-full  outline-none px-3 py-4 rounded-2xl  text-blue-500 bg-gray-100"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-100 px-8 py-3 rounded-xl text-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
