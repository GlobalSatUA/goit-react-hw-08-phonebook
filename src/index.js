import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/components/AppRouter/AppRouter'; 
import './index.css';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render( 
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/">
      <AppRouter /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
