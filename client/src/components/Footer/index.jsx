/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './style.css';
import { Row, Col } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const Footer = () => (
  <Row className="footer">
    <Col xs={24} md={12} lg={4} className="gutter-row">
      <h3>SHOP</h3>
      <p>Women</p>
      <p>Bedding</p>
      <p>Men</p>
      <p>Sleepwear</p>
    </Col>
    <Col xs={24} md={12} lg={6} className="gutter-row">
      <h3>SHOP INFORMATION</h3>
      <p>Gift Certificates</p>
      <p>Wholesale Login</p>
      <p>Referral Program</p>
      <p>Referral Program Terms & Condition</p>
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
      <p>Our Covid-19 Response</p>
      <p>Email Signup</p>
    </Col>
    <Col xs={24} md={12} lg={6} className="gutter-row">
      <h3>CUSTOMER CARE</h3>
      <p>Contact Us</p>
      <p>Returns</p>
      <p>Sustainability & Responsibility</p>
      <p>Referral Program Terms & Condition</p>
      <p>Fabric Care & instruction </p>
      <p>Sizing Gudie</p>
      <p>Terms of Service</p>
    </Col>
    <Col xs={24} md={12} lg={8} className="gutter-row">
      <h3>FOLLOW US</h3>
      <div className="social-media">
        <FacebookOutlined />
        <InstagramOutlined />
        <LinkedinOutlined />
      </div>
      <p />
      <p>SIGN UP FOR OUR NEW SLETTER</p>
      <p>
        Subscribe to our email list & receive 20% OFF coupon code to get tou
        started and stay updated on the new news and all things YALA
      </p>
      <div>
        <input type="text" placeholder="Enter your email" />
      </div>
    </Col>
  </Row>
);

export default Footer;
