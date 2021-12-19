// import Slider from "@ant-design/react-slick";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogComponent from "./ProductComponent";
import Content from "./Content";
import Slider from "react-slick";
import axios from "axios";
import { Facebook } from "@mui/icons-material";
import { Skeleton, Typography, Button } from "@mui/material";
// import mmo  from '../public/img/iphonebanner.png'

const Banner = (props) => {
  return (
    <div className="banner w-full h-screen overflow-hidden">
      <div className="r mx-auto h-full">
        <div className="container mx-auto h-full  flex items-center">
          <div className="flex items-center flex-wrap w-full">
            <div className="w-full lg:w-1/2 ">
              <div className="2xl:p-20 lg:p-5 p-2 space-y-3 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold">Welcomme to Paradise</h2>
                <div className="space-y-3">
                  <i>Everyone looks at your watch and it represents who you are, your values and your personal style.</i>
                  <strong className="block">– Kobe Bryant</strong>
                  <div>
                    <button  className="bg-transparent text-white hover:bg-white hover:text-black shadow-none hover:shadow-none border-white border transition-all duration-250 px-4 py-2">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:py-10 lg:pr-10 ">
              <div className="bg-white flex items-center  rounded-xl w-8/12 mx-auto  ">
                <img  className=" rounded-xl" src="https://storage.googleapis.com/download/storage/v1/b/facebookreact-d5338.appspot.com/o/blogmmo%2F1639742693409.png?generation=1639742694522992&alt=media" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
