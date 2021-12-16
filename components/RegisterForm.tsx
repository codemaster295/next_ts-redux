import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register as registerUser } from "../store/actions/authActions";
import { registerUserTypes } from "../types";

const RegisterForm = () => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password === repeatPassword) {
      let data: registerUserTypes = {
        email: email,
        password: password,
        username: userName,
      };
      const userdata: any = await dispatch(registerUser(data));
      console.log(userdata);
      if (userdata.payload.success === true) {
        toast.success(userdata.payload.message, {
          position: "bottom-left",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        Router.push("/");
      } else {
        toast.error(userdata.payload.message, {
          position: "bottom-left",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      toast.error(`The passwords should be same `, {
        position: "bottom-left",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="container mx-auto">
      <form
        className="space-y-5 w-1/2 mx-auto mt-20 shadow-2xl p-5 text-blue-500"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="username">Enter the username</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
            className="w-full  outline-none px-3 py-4 rounded-2xl  text-blue-500 bg-gray-100"
            type="text"
            name="username"
            id="username"
          />
        </div>
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
        <div className="space-y-2">
          <label htmlFor="repassword">Repeat the password</label>
          <input
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            required
            className="w-full  outline-none px-3 py-4 rounded-2xl  text-blue-500 bg-gray-100"
            type="password"
            name="repassword"
            id="repassword"
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

export default RegisterForm;
