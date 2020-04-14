import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/rootStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import history from './store/history';
import App from './container/App';
import BoardContainer from './components/BoardContainer';

const rootstore = configureStore();

ReactDOM.render(
  <Provider store={rootstore}>
    <React.StrictMode>
      <Router history={history}>
        <Switch>
          <Route path="/board" component={BoardContainer} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
