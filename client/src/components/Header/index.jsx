import React from "react";
import "./stayl.css";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Header(params) {
  return (
    <div className="header">
      <div className="logo">YALA</div>

      <div className="search-nav">
        <input type="text" />
      </div>

      <div className="icon">
        <HeartOutlined />
        <ShoppingCartOutlined />
        <UserOutlined />
      </div>
    </div>
  );
}

export default Header;
