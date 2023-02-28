import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { App } from './components/App';

import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Suspense fallback="loading"></Suspense>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);
