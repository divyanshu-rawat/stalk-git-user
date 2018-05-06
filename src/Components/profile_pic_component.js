


import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {api_data} from '../action_creators/api_data';
import { bindActionCreators } from 'redux';


export function Picture(props){
	return(
		<div>
			<img className ="_mg" src = {props.data.avatar_url} width = "240" />
		</div>
	)
}
