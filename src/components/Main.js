import React from "react";
import Centre from "./Centre";
import Item from "./Item";
import Sidebar from "./Sidebar";
import { Layout } from "antd";

const { Content, Sider } = Layout;

function Main() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          className="left"
        >
          <Item />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content
            style={{ margin: "24px 16px 0", overflow: "initial" }}
            className="Centre"
          >
            <div className="head">
              <h1 style={{color: "black"}}><b>Dashboard</b></h1>
            </div>
            <div style={{ margin: 0, padding: 24, textAlign: "center" }}>
              <Centre />
            </div>
          </Content>
        </Layout>
        <Sider width={400} className="right">
          <Sidebar/>
        </Sider>
      </Layout>
    </div>
  );
}

export default Main;
