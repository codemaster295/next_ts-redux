import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthToken } from "../store/actions/actionsMain";
import { Button, Popconfirm, Select as AntdSelect } from "antd";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    let token = await dispatch(getUserAuthToken([]));
  }, []);
  const userDataRedux: any = useSelector((state: any) => state.authReducer);
  let { userauthtoken } = userDataRedux;

  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-4 items-center">
        <span className="text-3xl font-bold w-2/12">
          <Link href="/">Sample</Link>
        </span>
        {/* <div className="relative w-8/12 flex items-center justify-end ">
          <input
            className="bg-gray-200 outline-none w-full py-3 px-2"
            type="text"
            name="searchproduct"
            id="searchproduct"
          />
          <Search className="absolute mr-4 cursor-pointer" />
        </div> */}
        <AntdSelect
          showSearch
          style={{ width: "100%" }}
          placeholder="Search product"
          optionFilterProp="children"
          // onChange={(e, target) => {
          //   setSelectedMinter({
          //     minterID: target.key,
          //     roomName: target.name,
          //     docID: target.value,
          //     isActive: target.label,
          //   })
          //   setActiveButton(target.label)
          // }}
        >
          {/* {Object.values(roomdata).map((item, index) => (
            <Option
              value={item.docID}
              key={item.data.RoomID + index}
              name={item.data.RoomName}
              label={item.data.isActive}
            >
              {item.data.RoomName}
            </Option>
          ))} */}
        </AntdSelect>
        {!userauthtoken ? (
          <ul className="flex items-center space-x-10 w-4/12  ">
            <li className="text-black">
              <Link href="/login">Login</Link>
            </li>
            <li className="text-black">
              <Link href="/register">Signup</Link>
            </li>
          </ul>
        ) : (
          <ul className="w-2/12 flex space-x-10 justify-end items-center mb-0">
            <li className="text-black">
              <Link href="/createblog">
                {/* <button className="button text-white px-4 py-2 rounded-md shadow-2xl font-semibold"> */}
                <Badge badgeContent={4} color="primary">
                  <ShoppingCart className="text-blue-500" />
                </Badge>
                {/* </button> */}
              </Link>
            </li>
            <AccountCircle
              className="text-gray-300 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease"
              style={{ fontSize: 45 }}
              // onClick={() => {
              //   setProfileMenu(!profilemenu);
              //   setOpen(!open);
              // }}
            />
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
