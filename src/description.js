


import React from 'react';
import ReactDom from 'react-dom';
import {Bio} from './Components/bio';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import {api_data} from './action_creators/api_data';

export class Description extends React.Component{

	constructor(props){
		super(props)
	}

	inc_counter(){
		console.log(this.props.data.GithubReducer.data);
		console.log(this.props.data.GithubReducer);
		console.log(this.props.data);
	}

	render(){
		return(
				       <Bio data = {this.props.data.GithubReducer.data} />
		)
	}
}


/*
	const mapStateToProps = (state) => {
	  return state;
	}

	const mapDispatchToProps = (dispatch) => {
	  return bindActionCreators({api_data}, dispatch);
	}


	export default connect(mapStateToProps,mapDispatchToProps)(Divyanshu);
*/