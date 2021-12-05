import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative flex h-96 items-center ">
      <img className="w-full h-full object-cover absolute top-0 left-0 " src="https://storage.googleapis.com/download/storage/v1/b/facebookreact-d5338.appspot.com/o/blogmmo%2F1638710532257.jpg?generation=1638710532939370&alt=media" alt="" />
      <div className="container mx-auto z-50">
        <h1 className="text-pink-500 font-bold text-4xl leading-loose">Welcome to MEBLOGRN</h1>
        <p className="text-black text-2xl leading-loose	">Blog library for MERN , MEAN and MENN stack </p>
      </div>
    </div>
  )
}

export default Banner
