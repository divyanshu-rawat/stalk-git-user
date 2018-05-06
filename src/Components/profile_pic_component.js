


import React from 'react';
import ReactDom from 'react-dom';

export function Picture(props){
	return(
		<div>
			<img className ="_mg" src = {props.data.avatar_url} width = "240" />
		</div>
	)
}
