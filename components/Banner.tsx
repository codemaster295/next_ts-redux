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
    <div className="banner w-full h-screen">
      <div className="r mx-auto z-50  h-full">
        <div className="w-full container mx-auto h-full  flex items-center">
          <div className="flex items-center flex-wrap">
            <div className="w-full lg:w-1/2 lg:order-0 order-1 ">
              <div className="2xl:p-20 lg:p-5 p-2 space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
                <div className="space-y-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicingelit.Dolore ad animi ex. Temporibus consequatur suscipit debitis,corrupti minima incidunt est.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div>
                    <Button variant="contained" className="bg-black text-white hover:bg-white hover:text-black">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg-order-1 order-0 lg:py-10 lg:pr-10">
              <Skeleton variant="rectangular" width={"100%"} height={444} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
