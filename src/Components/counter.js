

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{

	constructor(props){
		super(props)
	}

	check(){
		console.log(this);
	}

	render(){
		return(
				<button onClick = {() => {this.check()}}></button>
		)
	}
}


const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(Counter)

