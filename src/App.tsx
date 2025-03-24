import React from 'react';
import { App as AppLayout, ConfigProvider } from 'antd';
import Layout from '@/layouts';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <ConfigProvider>
    <AppLayout
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AppLayout>
  </ConfigProvider>
);

export default App;
