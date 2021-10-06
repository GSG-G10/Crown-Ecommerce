import "./style.css";
import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

function Category() {
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
        <TabPane tab="New" key="new">
          new
        </TabPane>
        <TabPane tab="Men" key="men">
          men
        </TabPane>
        <TabPane tab="Women" key="women">
          women
        </TabPane>
        <TabPane tab="Kids" key="kids">
          kids
        </TabPane>
        <TabPane tab="Both" key="Both">
          Both
        </TabPane>
        <TabPane tab="About As" key="About As">
          About As
        </TabPane>
        <TabPane tab="Oue Blog" key="Oue Blog">
          Oue Blog
        </TabPane>
      </Tabs>
      <div>
        {filterData.length !== 0
          ? filterData.map((ele) => console.log(ele))
          : "loading ... !"}
      </div>
    </div>
  );
}

export default Category;