import React from "react";
import "./App.css";
import Centre from "./components/Centre";
import Item from "./components/Item";
import { Layout} from 'antd';

const { Content, Sider } = Layout;



function App() {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
       <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      className="left"
    >
      <Item />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }} className = "Centre">
        <div style={{ padding: 24, textAlign: 'center' }}>
           <Centre />
        </div>
      </Content>
    </Layout>
    <Sider width={400} className="right"></Sider>
      </Layout>
    </div>
  );
}

export default App;
