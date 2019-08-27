import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filterTerm: filterReducer
});

const store = createStore(reducer);

const render = () => {
  console.log(store.getState());
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

render();
store.subscribe(render);
