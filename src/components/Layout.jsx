import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import ToastifyContainer from './UI/ToastifyContainer/ToastifyContainer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Hello World */}
        <ToastifyContainer />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
