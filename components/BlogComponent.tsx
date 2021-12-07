import React from "react";
import moment from "moment";
import { Router, useRouter } from "next/router";
const BlogComponent = ({ data }) => {
  const router = useRouter()
  console.log(data, "datadata")
  return (
    <div className="space-y-5 shadow-2xl" onClick={()=>{router.push({pathname:"/blog/"+data.id})}}>
      <img src={data.data.banner.url} alt="" />
      <div className="p-2 space-y-5">
        <h1 className="text-xl">{data.data.title[0].text}</h1>
        <h6>{moment(data.first_publication_date).format("MMMM DD YYYY")}</h6>
      </div>
    </div>
  );
};

export default BlogComponent;
