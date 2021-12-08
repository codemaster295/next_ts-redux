// import Slider from "@ant-design/react-slick";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogComponent from "./BlogComponent";
import Content from "./Content";
import Slider from "react-slick";
import axios from "axios";
import { Facebook } from "@mui/icons-material";

const Banner = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [bannerData, setBannerData] = useState([]);
  useEffect(async () => {
    const registrationData = await axios.get(
      `${process.env.baseUrl}/api/v1/bannerproducts`
    );
    setBannerData(registrationData.data.data);
  }, []);
  console.log(bannerData);
  return (
    <div className="banner w-full">
      <div className="r mx-auto z-50  ">
        <div className="w-full">
          <div className="w-full">
            <Slider {...settings}>
              {bannerData.map((data) => (
                <div className="relative h-full">
                  <img src={data.image} alt="" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="container mx-auto">
                      <h1 className="font-bold text-4xl text-white">
                        {data.title}
                      </h1>
                      <p className="font_Inter text-white font-semibold">
                        {data.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="w-5/12 space-y-10">
            <h1 className="font-bold text-4xl text-white-600">
              What this NFT thing is all about
            </h1>
            <p className="font_Inter text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              suscipit a quas earum iusto eos optio non distinctio ut facere vel
              recusandae doloremque ducimus numquam laboriosam doloribus
              voluptatibus ad deserunt, eaque animi, minima odit.
            </p>
            <button className="button text-white px-4 py-2 rounded-md shadow-2xl font-semibold">
              know more
            </button>
          </div> */}
          {/* <div className="block">
            <Slider {...settings}>
              <Image
                height={500}
                width={500}
                src="https://storage.googleapis.com/download/storage/v1/b/facebookreact-d5338.appspot.com/o/blogmmo%2F1638866417050.png?generation=1638866417303495&alt=media"
                alt=""
              />
            </Slider>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
