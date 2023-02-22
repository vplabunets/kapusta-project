import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import LoaderCabbage from './LoaderCabbage/LoaderCabbage';
import ToastifyContainer from './UI/ToastifyContainer/ToastifyContainer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoaderCabbage />}>
        <ToastifyContainer />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
