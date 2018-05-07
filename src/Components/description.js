


import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Routes/routes_headers';


// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import {api_data} from './action_creators/api_data';

export class Description extends React.Component{

	constructor(props){
		super(props);
	}

	ComponentDidMount(){
		console.log('I am did mount!')
	}
	ComponentWillMount(){
		console.log('I am will mount')
	}

	render(){

		const data = this.props.data.GithubReducer.data;
		const bio = data.bio;

		return(
				  <div>
				  		<Header data = {data}/>
				  <div>
				  	<p>{bio}</p>
				  </div>

			  	  </div>
		)
	}
}
