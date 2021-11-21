import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


// //Reducers
const feelingReducer = (state = [], action) => {
    console.log("Hello World!");
    if (action.type === 'ADD_FEELING'){
        return [...state, action.payload];
    }
    return state;
  }; 

  const understandingReducer = (state = [], action) => {
    console.log("Hello World!");
    if (action.type === 'ADD_UNDERSTANDING'){
        return [...state, action.payload];
    }
    return state;
  }; 

  const supportReducer = (state = [], action) => {
    console.log("Hello World!");
    if (action.type === 'ADD_SUPPORT'){
        return [...state, action.payload];
    }
    return state;
  }; 

  const commentsReducer = (state = [], action) => {
    console.log("Hello World!");
    if (action.type === 'ADD_COMMENTS'){
        return [...state, action.payload];
    }
    return state;
  }; 

  //Store
  const storeInstance = createStore(
    combineReducers(
      {
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
      }
    ),
    applyMiddleware(
        logger
      )
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
