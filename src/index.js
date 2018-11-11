import  React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './stores/redux/reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const hist = createBrowserHistory();
const renderApp = () => 
ReactDOM.render(
  <Provider store={store}>
  <Router history={hist} >
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', () => {
      renderApp();
    });
  }
  renderApp();
  
  serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

