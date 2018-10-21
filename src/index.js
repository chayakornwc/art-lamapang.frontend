import  React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { create } from 'domain';
const hist = createBrowserHistory();
const renderApp = () => 
ReactDOM.render(
  <Router history={hist} >
    <App />
    </Router>,
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

