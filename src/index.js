import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/components/AppRouter/AppRouter'; 
import './index.css';
import store from './redux/store';

ReactDOM.render( 
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
