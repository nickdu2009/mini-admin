import './index.less';
import React from 'react';
import { Layout } from 'antd';
import Menu from '@/layouts/components/Menu';
import Header from '@/layouts/components/Header';
import Tabs from '@/layouts/components/Tabs';
import Footer from '@/layouts/components/Footer';

const LayoutIndex: React.FC = () => {
  const { Sider, Content } = Layout;

  return (
    <section className="container">
      <Sider trigger={null} width={220} theme="light">
        <Menu></Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Tabs></Tabs>
        <Content>
          <p>content</p>
        </Content>
        <Footer></Footer>
      </Layout>
    </section>
  );
};

export default LayoutIndex;
