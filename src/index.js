import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';


ReactDOM.render (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);