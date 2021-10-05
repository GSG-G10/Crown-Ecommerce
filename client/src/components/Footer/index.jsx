import React from "react";
import { Row, Col, Divider } from "antd";

const Footer = () => {
  return (
    <Row>
      <Col xs={24} md={12} lg={4} className="gutter-row">
        <div>col-1</div>
        <div>col-1</div>
        <div>col-1</div>
        <div>col-1</div>
      </Col>
      <Col xs={24} md={12} lg={6} className="gutter-row">
        <div>col-6</div>
        <div>col-6</div>
        <div>col-6</div>
        <div>col-6</div>
      </Col>
      <Col xs={24} md={12} lg={6} className="gutter-row">
        <div>col-4</div>
        <div>col-4</div>
        <div>col-4</div>
        <div>col-4</div>
      </Col>
      <Col xs={24} md={12} lg={8} className="gutter-row">
        <div>col-6</div>
        <div>col-6</div>
        <div>col-6</div>
        <div>col-6</div>
      </Col>
    </Row>
  );
};

export default Footer;
