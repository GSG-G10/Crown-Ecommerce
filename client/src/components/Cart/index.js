import { Table } from "antd";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [result, setResult] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    fetch(`/api/v1/cart`, { mode: "cors" })
      .then((result) => {
        return result.json();
      })
      .then((data) => setUserId(data[0].userid));
  }, []);

  useEffect(() => {
    if (userId !== 0) {
      fetch(`/api/v1/cart/${userId}`, { mode: "cors" })
        .then((result) => {
          return result.json();
        })
        .then((data) => setResult(data));
    }
  }, [userId]);

  const filterResult = () => {
    const jsonObject = result.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    return uniqueArray;
  };

  const columns = [
    {
      image: "image",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={text} alt="product" width="80" height="80" />,
    },
    {
      dataIndex: "title",
      key: "title",
      render: (text) => <p>{text}</p>,
    },
    {
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      dataIndex: "price",
      key: "price",
    },
    {
      dataIndex: "delete",
      key: "delete",
      render: () => <button>delete</button>,
    },
  ];

  const data = filterResult().map((ele) => {
    return {
      key: ele.id,
      image: ele.image1,
      title: ele.title,
      quantity: "1",
      price: ele.price,
    };
  });

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default Cart;
