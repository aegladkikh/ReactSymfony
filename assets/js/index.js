import '../scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {decrement, increment} from "./redux/actions";
import thunk from "redux-thunk";
import logger from 'redux-logger';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');

// compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
});


store.subscribe(() => {
  const state = store.getState();

  counter.textContent = state.counter
});

store.dispatch({type: 'INIT_APPLICATION'});

ReactDOM.render(<App/>, document.getElementById('App'));