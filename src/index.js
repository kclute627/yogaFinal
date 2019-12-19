import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer,  composeWithDevTools())

console.log(store)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
