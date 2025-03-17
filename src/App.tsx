import React from 'react';
import { App as AppLayout, ConfigProvider } from "antd";
import Layout from '@/layouts';


const App: React.FC = () => (
  <ConfigProvider>
    <AppLayout style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Layout />
    </AppLayout>
  </ConfigProvider>
);

export default App;
