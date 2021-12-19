import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const HotProducts = (props) => {
  const ProductData = useSelector((state: any) => state.product)
  // const BlogData: any = useSelector((state: any) => state)
  // const dispatch = useDispatch()
  const [postData, setPostData] = React.useState([1, 2, 3, 4, 5]);
  // useEffect(async () => {
  //   const data: any = await axios.get("https://fakestoreapi.com/products?limit=5");
  //   setPostData(data.data);
  // }, []);
  console.log(ProductData, "ProductDataProductDataProductData")
  return (
    <div className="mt-20">
      <div className="container mx-auto bg-white space-y-3">
        <h1 className="text-3xl font-bold">Hot Products</h1>
        <div className="flex items-center flex-wrap">{ProductData && ProductData.map((data) => <ProductComponent data={data} />)}</div>
        <div className="text-right text-black font-semibold">
          <Link href={"/products"}> View More</Link>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default HotProducts;
