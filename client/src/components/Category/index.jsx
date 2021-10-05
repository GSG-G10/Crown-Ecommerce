import "./style.css";
import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

function Category() {
  const [allData, setAllData] = useState({});
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch(`/product`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllData(data);
      })
      .catch((err) => console.log(err));
  }, [number]);

  function callback(tab) {
    console.log(tab);
  }

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={(key) => {
          console.log(key);
          setNumber(key);
        }}
        className="category-bar"
      >
        <TabPane tab="New" key="1">
          New
        </TabPane>
        <TabPane tab="Men" key="2">
          men
        </TabPane>
        <TabPane tab="Women" key="3">
          women
        </TabPane>
        <TabPane tab="Kids" key="4">
          kids
        </TabPane>
        <TabPane tab="Both" key="5">
          Both
        </TabPane>
        <TabPane tab="About As" key="6">
          About As
        </TabPane>
        <TabPane tab="Oue Blog" key="7">
          Oue Blog
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Category;
