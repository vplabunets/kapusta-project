import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import theme from './theme/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './i18n';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="loading"></Suspense>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
