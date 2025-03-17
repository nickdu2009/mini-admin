import './index.less';
import React from 'react';
import { Layout } from 'antd';
import Language from './components/Language.tsx';

const Header: React.FC = () => {
  const { Header } = Layout;
  return (
    <Header style={{ background: "#fff", padding: 12 }}>
      <div className="header-lf">
        header-lf
      </div>
      <div className="header-ri">
        <Language />
      </div>
    </Header>
  );
};

export default Header;
