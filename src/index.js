import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {Picture} from './Components/profile_pic_component';

import { combineReducers } from 'redux'
import {Reducer} from './Reducers/reducers';
import {Counter} from './Reducers/counter_reducer';


// const rootReducer = combineReducers({ Counter, Reducer });

const rootReducer = combineReducers({ Reducer });
const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>

    <Main />
  </Provider>, document.getElementById('root'));


