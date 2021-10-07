import React, { useEffect, useState } from "react";
import CardImage from "../Card";
import { Skeleton, Card } from "antd";
import "./style.css";

const { Meta } = Card;

function NewConforts() {
  const [data, setData] = useState([0, 0, 0, 0]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    fetch("/api/v1/product/new-product")
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
        isLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {!loading
          ? data.map((item, index) => <CardImage key={index} data={item} />)
          : data.map(() => (
              <div className="skeleton-container">
                <Skeleton.Image />
                <Skeleton loading={true} active>
                  <Meta
                    title="Card title"
                    description="This is the description"
                  />
                </Skeleton>
              </div>
            ))}
      </div>
    </div>
  );
}

export default NewConforts;
