import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="banner w-full">
      <div className="container mx-auto z-50  ">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <h1 className="font-bold text-4xl leading-loose">           </h1>
            <p className=" text-2xl leading-loose	">Blog library for MERN , MEAN and MENN stack </p>
          </div>
          <div className="w-1/2">
            <Image height={500} width={500} src="https://storage.googleapis.com/download/storage/v1/b/facebookreact-d5338.appspot.com/o/blogmmo%2F1638710532257.jpg?generation=1638710532939370&alt=media" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner
