

import React from 'react';
import { Route,Switch } from 'react-router';
import {Divyanshu} from '../divyanshu';
import Main from '../Main';

export const getRoutes = (store) => {

  // const state = store.getState();

  const state = {"name" : "divyanshu"};


  return (
  	<Switch>

  	  <Route exact path="/divyanshu" component={Divyanshu} state = {state} onEnter={state}/>
      <Route path="/" component={Main} />
	  
    </Switch>
  );
}

