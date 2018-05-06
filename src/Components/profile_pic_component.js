
// <img className ="_mg" src = {props.data.avatar_url} width = "240" />

import React from 'react';
import ReactDom from 'react-dom';


export class Picture extends React.Component{

	render(){

		const avatar_url = this.props.data.GithubReducer.data.avatar_url;
		return(
			<div>
				<img className ="_mg" src = {avatar_url} width = "240" />
			</div>
		)
	}
}

