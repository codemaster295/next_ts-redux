import "tailwindcss/tailwind.css";
import "../tailwind.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { loadUser } from "../store/actions/authActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../store/actions/productActions";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(Products())
  }, []);
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <ToastContainer style={{ zIndex: 100000 }} />
    </React.Fragment>
  );
}
export default wrapper.withRedux(MyApp);
