import logo from '@/assets/images/logo.png';
import React from 'react';

const Logo: React.FC<{ isCollapse: boolean }> = ({ isCollapse }) => {
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      {!isCollapse ? <h2 className="logo-text">Mini Admin</h2> : null}
    </div>
  );
};
export default Logo;
