import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

import Header from './components/Header';
import store from './store';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={4000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
