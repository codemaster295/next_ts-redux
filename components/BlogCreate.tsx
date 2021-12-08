import React, { useState } from "react";
import { Button } from "@mui/material";
import { CreateBlog } from "../store/actions/actionsMain";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { toast } from "react-toastify";

const BlogCreate: any = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [fileList, setFileList]: any = useState([]);
  const [editorState, setEditorState] = useState();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (fileList[0].originFileObj.size >= 1048576) {
      toast.error("image should be less than 10 mb", {
        position: "bottom-left",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      formData.append("image", fileList[0].originFileObj);
      let successData: any = await dispatch(
        CreateBlog({
          image: formData,
          blogdata: { title: blogTitle, description: blogDescription },
        })
      );
      toast.success(successData.payload.message, {
        position: "bottom-left",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const handleImage = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const dummyRequest: any = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const tags = ["p", "h1", "h2"];

  return (
    <form
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl w-1/2 "
      onSubmit={handleSubmit}
    >
      <div className="w-full p-10 space-y-5">
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Blog Title
          </label>
          <input
            className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide"
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter The Title"
          />
        </div>
        <ImgCrop rotate aspect={9 / 3}>
          <Upload
            multiple={false}
            customRequest={dummyRequest}
            listType="picture-card"
            onChange={handleImage}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>

        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700 ">
            Description
          </label>
          <textarea
            className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide"
            onChange={(e) => {
              setBlogDescription(e.target.value);
            }}
            placeholder="Description"
          ></textarea>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BlogCreate;
