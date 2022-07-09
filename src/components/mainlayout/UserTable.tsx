import React, { useState } from "react";
import { Table, Modal } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EditDrawer from "components/mainlayout/EditUserDrawer";
import { getUsers } from "redux/selectors/auth";
import { IUser } from "interface/auth";
import { deleteUserAction } from "redux/actions/auth";

const TableWrapper = styled.div`
  .actions {
    display: flex;
    align-items: center;
  }
  .delete_icon {
    color: red;
    margin-left: 15px;
  }
`;

interface DataType {
  email:string,
  name:string,
  age:number,
  phone:number,
  prefix:number,
}

const UserTable: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editedUser, setEditedUser] = useState<IUser | null>(null);
  const users: IUser[] = useSelector(getUsers);
  console.log("users++++", users)
  const dispatch = useDispatch();

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Actions",
      dataIndex: "email",
      render: (_, user) => {
        return (
          <div className="actions">
            <div>
              <EditOutlined onClick={() => editSelect(user)} />
            </div>
            <div>
              <DeleteOutlined
                className="delete_icon"
                onClick={() => deleteHandler(user)}
              />
            </div>
          </div>
        )
      }
    },
  ];
  
  const editSelect = (user: IUser) => {
    setEditedUser(user);
    setOpenModal(true);
  };

  const deleteHandler = (user: IUser) => {
    console.log("user", user)
    Modal.confirm({
      title: "Are you sure, you want to delete it ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        // setDataSource((pre: any) => pre.filter((a: any) => a.id !== id));
        dispatch(deleteUserAction(user));
      },
    });
  };

  return (
    <>
      <TableWrapper>
        <Table
          columns={columns}
          dataSource={users}
        />
        {openModal && (
          <EditDrawer
            setOpenModal={setOpenModal}
            editedUser={editedUser}
            setEditedUser={setEditedUser}
          />
        )}
      </TableWrapper>
    </>
  );
};

export default UserTable;
