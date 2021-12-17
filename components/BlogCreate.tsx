import React, { useState } from "react";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { CreateBlog } from "../store/actions/actionsMain";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { toast } from "react-toastify";
import axios from "axios";

const BlogCreate: any = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [fileList, setFileList]: any = useState([]);
  const [editorState, setEditorState] = useState();
  const [Category, setCategory] = useState("")
  const [Price, setPrice] = useState(null)
  const [Discount, setDiscount] = useState(null)
  const [Images, setImages] = useState([])
  const [Gender, setGender] = useState("")
  const [Series, setSeries] = useState("")
  const [ProductType, setProductType] = useState("")
  const [ProductCode, setProductCode] = useState("")
  const [DialType, setDialType] = useState("")
  const [DialColor, setDialColor] = useState("")
  const [CaseColor, setCaseColor] = useState("")
  const [CaseShape, setCaseShape] = useState("")
  const [CaseSize, setCaseSize] = useState("")
  const [CaseMaterial, setCaseMaterial] = useState("")
  const [CaseThickness, setCaseThickness] = useState("")
  const [CaseBazel, setCaseBazel] = useState("")
  const [BandWidth, setBandWidth] = useState("")
  const [BandMateriel, setBandMateriel] = useState("")
  const [Features, setFeatures] = useState("")
  const [WaterResistant, setWaterResistant] = useState("")
  const [CountryOrigin, setCountryOrigin] = useState("")
  const [ManufacturedBy, setManufacturedBy] = useState("")
  const [ImportedBy, setImportedBy] = useState("")
  const [PackedBy, setPackedBy] = useState("")

  // Name, Category, Description, Price, Discount, Images
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
      fileList.map((x) => {

        formData.append("image", x.originFileObj);
      })
      let imgArr = await axios.post("https://blogmmo.herokuapp.com/api/v1/post/createblog/uploadimage/multiple", formData)
      let formProductData = {
        Images: imgArr.data,
        Name,
        Category,
        Description,
        Price,
        Discount,
        General: {
          Gender, Series, ProductType, ProductCode
        },
        Dial: {
          DialColor, DialType
        },
        Case: {
          CaseColor, CaseShape, CaseSize, CaseMaterial, CaseThickness, CaseBazel,
        },
        Band: {
          BandWidth, BandMateriel,
        },
        AdditionInformation: {
          Features, WaterResistant, CountryOrigin, ManufacturedBy, ImportedBy, PackedBy
        }
      }
      let productData = await axios.post("http://localhost:5050/api/v1/add/product", formProductData, {
        headers: {
          "x-auth-token": localStorage.getItem('token')
        }
      })
      console.log(productData, "mmo")
    }
  }
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
  // General, Dial, Case, Band, AdditionInformation

  return (
    <form
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl w-1/2 "
      onSubmit={handleSubmit}
    >
      <div className="w-full p-10 space-y-5 overflow-y-scroll h-screen">
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Product Name
          </label>
          <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setName(e.target.value); }}
            type="text"
            placeholder="Enter The Name"
          />
        </div>
        <div className="space-y-5">

          <label className="font-normal text-lg text-gray-700">
            Category
          </label>
          <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCategory(e.target.value); }}
            type="text"
            placeholder="Enter The Category"
          />
        </div>
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Price
          </label>
          <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setPrice(e.target.value); }}
            type="text"
            placeholder="Price"
          />
        </div>
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Discount
          </label>
          <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setDiscount(e.target.value); }}
            type="text"
            placeholder="Discount"
          />
        </div>


        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            General
          </label>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              onChange={(e: any) => { setGender(e.target.value) }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Series
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setSeries(e.target.value); }}
              type="text"
              placeholder="Series"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              ProductType
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setProductType(e.target.value); }}
              type="text"
              placeholder="Series"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              ProductCode
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setProductCode(e.target.value); }}
              type="text"
              placeholder="Series"
            />
          </div>
        </div>
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Dial
          </label>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Dial Type"
              onChange={(e: any) => { setDialType(e.target.value) }}
            >
              <MenuItem value={"Analog"}>Analog</MenuItem>
              <MenuItem value={"Digital"}>Digital</MenuItem>
            </Select>
          </FormControl>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Dial Color
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setDialColor(e.target.value); }}
              type="text"
              placeholder=" Dial Color"
            />
          </div>
        </div>
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Case
          </label>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Case Color
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCaseColor(e.target.value); }}
              type="text"
              placeholder="Case Color"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Case Shape
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCaseShape(e.target.value); }}
              type="text"
              placeholder="Case Shape"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Case Size
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCaseSize(e.target.value); }}
              type="text"
              placeholder="Case Size"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Case Material
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCaseMaterial(e.target.value); }}
              type="text"
              placeholder="Case Material"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Case Thickeness
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCaseThickness(e.target.value); }}
              type="text"
              placeholder="Case Thickeness"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Case Bazel
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCaseBazel(e.target.value); }}
              type="text"
              placeholder="Case Bazel"
            />
          </div>
        </div>
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Band
          </label>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Band Width
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setBandWidth(e.target.value); }}
              type="text"
              placeholder="Band Width"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Band Materiel
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setBandMateriel(e.target.value); }}
              type="text"
              placeholder="Band Materiel"
            />
          </div>
        </div>
        <div className="space-y-5">
          <label className="font-normal text-lg text-gray-700">
            Additional Information
          </label>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Features
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setFeatures(e.target.value); }}
              type="text"
              placeholder="Features"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Water Resistant
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setWaterResistant(e.target.value); }}
              type="text"
              placeholder="Water Resistant"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Country Of Origin
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setCountryOrigin(e.target.value); }}
              type="text"
              placeholder="Country Of Origin"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Manufactured By
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setManufacturedBy(e.target.value); }}
              type="text"
              placeholder="Manufactured By"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Imported By
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setImportedBy(e.target.value); }}
              type="text"
              placeholder="Imported By"
            />
          </div>
          <div className="space-y-5">
            <label className="font-normal text-lg text-gray-700">
              Packed By
            </label>
            <input className="w-full banner py-3 px-2 rounded-sm outline-none text-gray-700 font-semibold tracking-wide" onChange={(e) => { setPackedBy(e.target.value); }}
              type="text"
              placeholder="Packed By"
            />
          </div>
        </div>
        <ImgCrop rotate >
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
              setDescription(e.target.value);
            }}
            placeholder="Description"
          ></textarea>
        </div>
        <Button className="button" variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
export default BlogCreate;

