import './index.less';
import React from 'react';
import { Layout } from 'antd';
import Language from './components/Language';
import AvatarIcon from './components/AvatarIcon';
import { useGlobalStore } from '@/stores';
import Fullscreen from './components/Fullscreen';
import CollapseIcon from './components/CollapseIcon';

const Header: React.FC = () => {
  const { Header } = Layout;
  const userInfo = useGlobalStore(state => state.userInfo);

  return (
    <Header style={{ background: "#fff", padding: 12 }}>
      <div className="header-lf">
        <CollapseIcon />
      </div>
      <div className="header-ri">
        <Language />
        <Fullscreen/>
        <span className="username">{userInfo?.username || "Default Username"}</span>
        <AvatarIcon />
      </div>
    </Header>
  );
};

export default Header;
