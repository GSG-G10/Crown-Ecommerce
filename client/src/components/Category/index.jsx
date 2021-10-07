import "./style.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card";

import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

function Category() {
  let history = useHistory();
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/product/`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterDataFunction = (category) => {
    const filterCategory = allData.filter((aaa) => aaa.category === category);
    console.log(filterCategory);
    setFilterData(filterCategory);
  };

  const handleClickNew = () => {
    history.push("/category/new");
  };

  const handleClickMen = () => {
    history.push("/category/men");
  };

  const handleClickWomen = () => {
    history.push("/category/women");
  };

  const handleClickKids = () => {
    history.push("/category/kids");
  };

  const renderData = () => {
    if (filterData.length !== 0) {
      return filterData.map((ele) => {
        return (
          <Card
            data={{
              id: 1,
              title: ele.title,
              category: ele.category,
              image1: ele.image1,
              price: ele.price,
            }}
          />
        );
      });
    } else {
      return "loading ... !";
    }
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={(key) => {
          console.log(key);
          filterDataFunction(key);
        }}
        className="category-bar"
      >
        <TabPane tab="New" key="new" onClick={handleClickNew}>
          new
        </TabPane>
        <TabPane tab="Men" key="men" onClick={handleClickMen}>
          {renderData()}
        </TabPane>
        <TabPane tab="Women" key="women" onClick={handleClickWomen}>
          {renderData()}
        </TabPane>
        <TabPane tab="Kids" key="kids" onClick={handleClickKids}>
          {renderData()}
        </TabPane>
        <TabPane tab="Both" key="Both">
          {renderData()}
        </TabPane>
        <TabPane tab="About As" key="About As">
          {renderData()}
        </TabPane>
        <TabPane tab="Our Blog" key="Our Blog">
          {renderData()}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Category;
