import "tailwindcss/tailwind.css";
import "../tailwind.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../store/actions/authActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../store/actions/productActions";
import "aos/dist/aos.css"
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loadUser());
    dispatch(Products())
    AOS.init()
  }, []);
  
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 100000 }} />
    </React.Fragment>
  );
}
export default wrapper.withRedux(MyApp);
