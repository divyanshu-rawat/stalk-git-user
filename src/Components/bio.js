
import React from 'react';
import ReactDom from 'react-dom';


export function Bio(props){
	return(
		<div>
			<h3>{props.data.bio}</h3>
		</div>
	)
}
