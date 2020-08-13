import React from "react";
import { Layout, Menu } from "antd";
import {
  YoutubeOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  ReadFilled,
  CommentOutlined,
  SettingFilled
} from "@ant-design/icons";

const { Sider } = Layout;

function Item() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}  style={{ marginTop:"200px"}}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Classes
          </Menu.Item>
          <Menu.Item key="3" icon={<YoutubeOutlined />}>
            Resources
          </Menu.Item>
          <Menu.Item key="4" icon={<ReadFilled />}>
            Learning Plan
          </Menu.Item>
          <Menu.Item key="5" icon={<CommentOutlined />}>
            Chat
          </Menu.Item>
          <Menu.Item key="6" icon={< SettingFilled/>}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default Item;