import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

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
      </BrowserRouter>
    </Provider>
  );
}

export default App;
