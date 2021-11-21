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
    console.log("Hello World!")
    return state;
  }; 

  //Store
  const storeInstance = createStore(
    combineReducers(
      {
        feelingReducer
      }
    ),
    applyMiddleware(
        logger
      )
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
