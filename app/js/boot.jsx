import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import Wrap from './components/Wrap.jsx';

const store = configureStore();
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Wrap/>
  </Provider>,
  rootElement
);
