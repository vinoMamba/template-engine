import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: colorBgContainer }}>
        <div className="logo" />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className='p-24 min-h-[calc(100vh-64px)]'
          style={{
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
            backgroundImage: 'radial-gradient(rgba(9, 89, 194, 0.3) 6%, transparent 0),radial-gradient(#faf9f8 6%, transparent 0)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
            background: colorBgContainer
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
