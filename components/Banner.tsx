import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="banner w-full">
      <div className="container mx-auto z-50  ">
        <div className="flex items-center justify-between">
          <div className="w-5/12 space-y-10">
            <h1 className="font-bold text-4xl text-gray-600">
              Sample blog site in next js,typescript,redux and nodejs
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
          </div>
          <div className="w-4/12 p-5">
            <Image
              height={500}
              width={500}
              src="https://storage.googleapis.com/download/storage/v1/b/facebookreact-d5338.appspot.com/o/blogmmo%2F1638866417050.png?generation=1638866417303495&alt=media"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
