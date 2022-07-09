import {
  Button,
  Form,
  Input,
  Select,
} from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "redux/actions/auth";
import styled from "styled-components";
const { Option } = Select;

const RegisterPage = styled.div`
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

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface Props {}
const Register: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(register({...values, token: 'test_token'}));
    navigate("/dashboard");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <RegisterPage className="light">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="E-mail"
          style={{width: "100%"}}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input style={{width: '330px'}}/>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password style={{width: '330px'}}/>
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password style={{width: '330px'}}/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{width: '330px'}} />
        </Form.Item>
        <div onClick={() => navigate("/login")} className="primary--text cursor-pointer text-center pb15">
          Login ?
        </div>
        <Form.Item {...tailFormItemLayout} >
          <Button type="primary" htmlType="submit" style={{margin:"0 0 0 10px"}}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </RegisterPage>
  );
};

export default Register;
