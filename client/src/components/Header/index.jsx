import React from "react";
import "./style.css";
import Search from "../Search";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header(params) {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">YALA</div>
      </Link>

      <div className="search-nav">
        <Search />
      </div>

      <div className="icon">
        <Link to="/fav">
          <HeartOutlined />
        </Link>
        <Link to="/card">
          <ShoppingCartOutlined />
        </Link>
        <Link to="/user">
          <UserOutlined />
        </Link>
      </div>
    </div>
  );
}

export default Header;
