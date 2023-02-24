import Layout from 'components/Layout';
import { lazy, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from 'routes/RestrictedRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './LoaderCabbage/LoaderCabbage.styled';
import { GooglePage } from 'pages/GooglePage/GooglePage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const OperationsPage = lazy(() =>
  import('../pages/OperationsPage/OperationsPage')
);
const ReportsPage = lazy(() => import('../pages/ReportsPage/ReportsPage'));
//  <Route path="*" element={<Navigate to="/" />} />
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <RestrictedRoute
                  redirectTo="/operations"
                  component={<HomePage />}
                />
              }
            />
            <Route
              path="google-redirect"
              element={
                <RestrictedRoute
                  redirectTo="/operations"
                  component={<GooglePage />}
                />
              }
            />
            <Route
              path="/operations"
              element={
                <PrivateRoutes redirectTo="/" component={<OperationsPage />} />
              }
            />
            <Route
              path="/reports"
              element={
                <PrivateRoutes redirectTo="/" component={<ReportsPage />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
