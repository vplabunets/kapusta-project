import React, { Suspense } from 'react';
//import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Button } from './UI/Button/Button';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        Hello World
        {/* <Outlet /> */}
        <Button type={'submit'} color={'accent'} design={'home'}>
          Login
        </Button>
        <Button type={'button'} color={'white'} design={'home'}>
          Registration
        </Button>
        <Button type={'button'} color={'accent'} design={'operation'}>
          Input
        </Button>
        <Button type={'button'} color={'white'} design={'operation'}>
          Clear
        </Button>
        <Button type={'button'} color={'white'} design={'modal'}>
          No
        </Button>
      </Suspense>
    </div>
  );
};

export default Layout;
