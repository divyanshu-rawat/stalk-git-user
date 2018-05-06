
import React from 'react';
import ReactDom from 'react-dom';


export class Bio extends React.Component{

	ComponentDidMount(){
		console.log('Bio',this.props.data);
	}

	render(){
		return(
			<div>
				<p>{this.props.data.bio}</p>
			</div>
		)
	}
}
