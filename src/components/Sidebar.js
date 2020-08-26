import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { LogoutOutlined } from "@ant-design/icons";
import { Progress } from 'antd';

function Sidebar() {
  return (
    <div>
      <div className="main">
        <h4 className="logout">
          <b>Logout</b>
        </h4>
        <LogoutOutlined style={{ float: "right" }} />
      </div>
      <div className="sidebar">
        <Avatar size={200} icon={<UserOutlined />} />
        <h1>
          <b>Akhil Nazim</b>
        </h1>
        <h1>Student</h1>
      </div>
      <div className="avatar1">
        <Avatar size={50} shape="square" style={{float:"left"}}>
          B2
        </Avatar>
        <h1>
          <b>English</b>
        </h1>
        <Progress percent={50} size="small" />
      </div>
      <div classname = "avatar2">
        <Avatar size={50} shape="square" style={{float:"left"}}>
          C1
        </Avatar>
        <h1>
          <b>Spanish</b>
        </h1>
        <Progress percent={20} size="small" />
      </div>
    </div>
  );
}
export default Sidebar;
