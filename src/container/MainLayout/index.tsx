import { Breadcrumb, Layout } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import UserTable from "components/mainlayout/UserTable";
import { logoutUser } from 'redux/reducers/auth'

const { Header, Content, Sider } = Layout;

const MainLayout: React.FC = () => {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logoutUser())
  }
  return (
    <Layout>
      <Header className="header white--text flex justify-between">
        <div style={{fontFamily: "fantasy"}}>
          Logo
        </div>
        <div onClick={logoutHandler} className="cursor-pointer">
          Logout
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <div className="white--text text-center py15" style={{background:"#1890ff" ,cursor:"pointer"}}>
            Dashboard
          </div>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <UserTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
