

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {api_data} from '../action_creators/api_data';

class Test extends React.Component{
	constructor(props){
		super(props);
		console.log('Here It Goes', this.props);
	}

	render(){
		return(
				<h3>Testing Purpose!</h3>
		)
	}
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({api_data}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Test);


