import { Button, Drawer, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { IUser } from "interface/auth";
import { updateUserAction } from "redux/actions/auth";

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

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedUser: (user: IUser | null) => void;
  editedUser: IUser | null;
}
const EditDrawer: React.FC<Props> = ({ setOpenModal, editedUser, setEditedUser }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log("values", values)
    dispatch(updateUserAction(values));
    onClose();
  };

  const onClose = () => {
    setOpenModal(false);
    setEditedUser(null);
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
    <>
      <Drawer
        title="Edit User"
        placement="right"
        onClose={onClose}
        visible={true}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="editedUser"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
          fields={[
            {
              name: ["email"],
              value: editedUser?.email || "",
            },
            {
              name: ["age"],
              value: editedUser?.age || ""
            },
            {
              name: ["name"],
              value: editedUser?.name || ""
            },
            {
              name:["phone"],
              value:editedUser?.phone || ""
            }
          ]}
        >
          <Form.Item
            name="email"
            label="E-mail"
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
            <Input
              name="email"
              disabled
            />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
            hasFeedback
          >
            <Input
              name="age"
            />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your name!",
              },
            ]}
          >
            <Input
              name="name"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              name="phonenumber"
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default EditDrawer;
