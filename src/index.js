import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {Profile} from './Components/profile_pic_component';

import { combineReducers } from 'redux'
import {GithubReducer} from './Reducers/reducers';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
// import {getRoutes} from './Routes/routes';
import {Description} from './Components/description';
import Main from './Main';





const rootReducer = combineReducers({ GithubReducer });
const store = createStore(rootReducer);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
     <Switch>
      <Route exact path="/description" render={() => <Description data = {store.getState()} />}/>
      <Route exact path="/profile" render={() =>     <Profile data = {store.getState()} />}/>
      <Route path="/" component={Main} />

     </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)


