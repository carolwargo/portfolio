import React from 'react';
import { Outlet } from 'react-router-dom';
import GraphicsHeader from '../Headers/GraphicsHeader';

const GraphicsLayout = () => {
  return (
    <div className="web-layout w3-light-gray">
      <div>
        <GraphicsHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default GraphicsLayout;