

import React, { Component } from 'react';
import App from './App';
import Test from './Components/test';

class Main extends React.Component{

	render(){
		return(
			<div> 
				<App />
				<Test />
			</div>
		)
	}
}

export default Main