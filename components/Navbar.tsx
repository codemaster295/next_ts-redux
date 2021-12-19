import { AccountCircle, Logout, Search, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

import { Container, Grid, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUserAuthToken } from "../store/actions/actionsMain";
import { Popconfirm, Select as AntdSelect } from "antd";
import { logout } from "../store/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const userDataRedux: any = useSelector((state: any) => state);
  console.log(userDataRedux, "mmousgere");
  // let { userauthtoken } = userDataRedux;
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [scroll, setScroll] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  })
  return (
    <div className="fixed transitio-all ease-linear duration-200 top-0 left-1/2 transform -translate-x-1/2 w-full  z-50 text-black bg-white">
      <div className="container mx-auto ">
        <div className="flex justify-between p-4 items-center">
          <span className="text-3xl font-bold w-2/12 ">
            <Link href="/">Paradise</Link>
          </span>
          {state.auth.isAuthenticated ? (
            ""
          ) : (
            <ul className="flex items-center space-x-10   m-0 ">
              <li className="text-black">
                <Link href="/login">Login</Link>
              </li>
              <li className="text-black">
                <Button className="" variant="contained">
                  <Link href="/register">Signup</Link>
                </Button>
              </li>
            </ul>
          )}
          {state.auth.isAuthenticated ? (
            <ul className="w-2/12 flex space-x-10 justify-end items-center mb-0">
              <li className="">
                <Link href="/createblog">
                  <Badge badgeContent={userDataRedux.cart.length !== 0 ? userDataRedux.cart.length : ""} className="">
                    <ShoppingCart className="" />
                  </Badge>
                </Link>
              </li>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircle className="text-gray-300 cursor-pointer transform scale-100 hover:scale-105 transition-all duration-100 ease" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
              {/* </div> */}
              {/* </ul> */}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
