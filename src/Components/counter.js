

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INC, DEC } from '../action_creators/counter_action_creator';
import {api_data} from '../action_creators/api_data';
import { bindActionCreators } from 'redux';

class Counter extends React.Component{

	constructor(props){
		super(props)
	}

	inc_counter(){
		console.log(this);
		this.props.INC();
	}

	render(){
		return(
				<button className = "btn btn-default _mg" onClick = {() => {this.inc_counter()}}>+</button>
		)
	}
}


const mapStateToProps = (state) => {
	return state;
}

const mapActionToProps = (dispatch) => {
	return bindActionCreators({INC,DEC}, dispatch);
}

export default connect(mapStateToProps,mapActionToProps)(Counter)

