import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from '../src/components/reducers/store';

import Header from './pages/header';
import Footer from './pages/footer';
import Content from './pages/content';

const Root = () => (
  <ReduxProvider store={store}>
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  </ReduxProvider>
);

export default hot(module)(Root);

