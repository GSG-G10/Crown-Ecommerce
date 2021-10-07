import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const { Item } = Form;

const Singup = () => {
  const [signupData, setSignupData] = useState(null);
  const onFinish = (values) => {
    setSignupData([values]);
    axios.post('/signup', values);
    console.log(values);
  };

  return (
    <div className="signup-form">
      <Form
        name="signup-form"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Item
          label="userName"
          name="userName"
          rules={[
            {
              type: 'text',
              required: true,
              message: 'Enter username',
            },
          ]}
        >
          <Input autoFocus />
        </Item>
        <Item
          label="firstName"
          name="firstName"
          rules={[
            {
              type: 'text',
              required: true,
              message: 'Enter firstName',
            },
          ]}
        >
          <Input autoFocus />
        </Item>
        <Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Enter your email',
            },
          ]}
        >
          <Input autoFocus />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Enter your password!',
            },
          ]}
        >
          <Input.Password />
        </Item>

        <Item name="login" valuePropName="checked">
          <span>Aleardy have an account? </span>
          <Link to="/login"> login </Link>
        </Item>

        <Item>
          <Button className="btn-form" type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Singup;
