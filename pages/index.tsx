import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { client } from "../prismic-config";
import Prismic from "@prismicio/client";

import {
  getUserAuthToken,
  setUserAuthToken,
  userDataRedux,
} from "../store/actions/actionsMain";
// import styles from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  const dispatch = useDispatch();
  const userData: any = useSelector((state) => state);
  useEffect(() => {
    let token = localStorage.getItem("token");
    let data = localStorage.getItem("data");
    // dispatch(setUserAuthToken({ token, ...JSON.parse(data) }))
    dispatch(getUserAuthToken([]));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blog website for demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner data={props.data} />
      {/* <SearchBar /> */}
    </div>
  );
};

export default Home;
export async function getServerSideProps() {
  const blog = await client.query(
    Prismic.Predicates.at("document.type", "blog")
  );

  return {
    props: {
      data: blog?.results,
    },
  };
}
