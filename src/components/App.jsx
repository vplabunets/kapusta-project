import Layout from 'components/Layout';
import { lazy } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const OperationsPage = lazy(() =>
  import('../pages/OperationsPage/OperationsPage')
);
const ReportsPage = lazy(() => import('../pages/ReportsPage/ReportsPage'));

// export const RestrictedRoute = ({
//   component: Component,
//   redirectTo = '/operations',
// }) => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   console.log(isLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route
            path="/"
            element={
              <RestrictedRoute
                redirectTo="/operations"
                component={<HomePage />}
              />
            }
          /> */}
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
