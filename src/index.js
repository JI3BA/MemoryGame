import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

const loginState = {
  name: '',
  level: ''
}

const GET_NAME = 'GET_NAME'
const GET_LEVEL = 'GET_LEVEL'

const reducer = (state = loginState, action) => {
  switch(action.type){

      case GET_NAME: 
        return {...state, name: state.name}

      case GET_LEVEL: 
        return {...state, level: state.level + action.payload}

      default: 
        return state
      
  }
}

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

