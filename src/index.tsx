import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {createReduxStore} from './store/store'

import './styles/css/main.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
      </Provider>
  </React.StrictMode>
);
