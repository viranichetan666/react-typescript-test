import { Button, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login } from "redux/actions/auth";
import { useDispatch } from "react-redux";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    width: 360px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
  }
`;

interface Props {}

const Login: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    dispatch(login({...values, token: 'test_token'}))
    navigate("/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LoginWrapper className="light">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          style={{width: "100%"}}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{width: "100%"}}/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <div onClick={() => navigate("/register")} className="primary--text cursor-pointer text-center pb15">
          Register ?
        </div>
        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
