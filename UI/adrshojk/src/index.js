import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} path='/' />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


