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
const feedbackReducer = (state = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comments: ''},
   action) => {
    console.log("Hello World!");
    if (action.type === 'ADD_FEELING'){
       state= {...state, feeling:action.payload};
    }
    else if (action.type === 'ADD_UNDERSTANDING'){
        state= {...state, understanding:action.payload};
    }
    else if (action.type === 'ADD_SUPPORT'){
      state= {...state, support:action.payload};
    }
    else if (action.type === 'ADD_COMMENTS'){
      state= {...state, comments:action.payload};
    }
    else if (action.type === 'ADD_REVIEW'){
      state= {...state, review:action.payload};
    }
    return state;
  }; 

  //Store
  const storeInstance = createStore(
    combineReducers(
      {
        feedbackReducer
      }
    ),
    applyMiddleware(
        logger
      )
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
