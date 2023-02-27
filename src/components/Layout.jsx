import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from 'styled-components';

import { useLocalStorage } from 'hooks/useLocalStorage';

import Header from './Header/Header';
import LoaderCabbage from './LoaderCabbage/LoaderCabbage';

import { themeLight, themeDark } from 'theme/theme';

const body = document.querySelector('body');

const Layout = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    body.style.backgroundColor = theme === 'light' ? '#202225' : '#FFFFFF';

    return;
  };

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <Header themeToggler={themeToggler} theme={theme} />

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
    </ThemeProvider>
  );
};

export default Layout;
