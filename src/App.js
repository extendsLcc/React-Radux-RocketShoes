import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

import Header from './components/Header';
import store from './store';
import history from './services/history';


function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
