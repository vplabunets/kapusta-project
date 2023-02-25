import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import LoaderCabbage from './LoaderCabbage/LoaderCabbage';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CongratulationsModal } from './CongratulationsModal/CongratulationsModal';
import { useSelector } from 'react-redux';
import { selectFirstVisit } from 'redux/auth/selectors';

const Layout = () => {
  let firstVisit = useSelector(selectFirstVisit);
  console.log(firstVisit);
  return (
    <div>
      <Header />
      {!firstVisit && <CongratulationsModal />}
      <Suspense fallback={<LoaderCabbage />}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Zoom}
        />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
