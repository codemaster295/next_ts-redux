import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

import HotProducts from "../components/HotProducts";

const Home: NextPage = (props) => {
  const dispatch = useDispatch();
  const userData: any = useSelector((state) => state);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog website for demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <HotProducts />
    </div>
  );
};

export default Home;
