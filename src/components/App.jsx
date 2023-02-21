import Layout from 'components/Layout';
import { lazy } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import RestrictedRoute from 'routes/RestrictedRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const OperationsPage = lazy(() =>
  import('../pages/OperationsPage/OperationsPage')
);
const ReportsPage = lazy(() => import('../pages/ReportsPage/ReportsPage'));

export const App = () => {
  return (
    <>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
