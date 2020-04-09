import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/rootStore';
import './index.css';
import App from './components/index';
import history from './store/history';
import BoardContainer from './components/boardContainer';

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
