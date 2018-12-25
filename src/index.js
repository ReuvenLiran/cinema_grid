import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux'
import dataService from './services/data-service'
import './index.css';
import App from './App.container';
import * as serviceWorker from './serviceWorker';

let store = createStore(reducers, {}, compose(applyMiddleware(dataService), window.devToolsExtension
	? window.devToolsExtension() : f => f))

    window.store = store;
// let store = createStore(todoApp,{}, compose(applyMiddleware(dataService), window.devToolsExtension
// 	? window.devToolsExtension() : f => f))

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
