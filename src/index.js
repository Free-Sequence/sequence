import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/rootStore';
import './index.css';
import App from '../src/components/index';
import history from './store/history';
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
