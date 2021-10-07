import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
const { Item } = Form;

const LoginForm = () => {
  const [loginData, setLoginData] = useState(null);
  const onFinish = (values) => {
    setLoginData([values]);
  };

  return (
    <div className="login-form">
      <Form
        name="login-form"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: "Enter your email",
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
              message: "Enter your password!",
            },
          ]}
        >
          <Input.Password />
        </Item>

          <Item name="signup" valuePropName="checked">
            <span>you don't have Account? </span>
            <Link to="/signup"> Sign up</Link>
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

export default LoginForm;