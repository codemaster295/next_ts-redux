import React from "react";
import moment from "moment";
const BlogComponent = ({ data }) => {
  console.log(data.first_publication_date);
  return (
    <div className="space-y-5 shadow-2xl">
      <img src={data.data.banner.url} alt="" />
      <div className="p-2 space-y-5">
        <h1 className="text-xl">{data.data.title[0].text}</h1>
        <h6>{moment(data.first_publication_date).format("MMMM DD YYYY")}</h6>
      </div>
    </div>
  );
};

export default BlogComponent;
