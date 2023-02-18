import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Balance from './Balance/Balance'

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Hello World */}
         <Balance/>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
