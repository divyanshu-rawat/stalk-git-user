


import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Routes/routes_headers';
import axios from 'axios';
import Moment from 'react-moment';


// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import {api_data} from './action_creators/api_data';

export class Description extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			data : []
		}
	}

	componentDidMount(){
		  const data  = this.props.data.GithubReducer.data;
		  const login = data.login;

		  let url_ = "https://api.github.com/users/" + login + "/repos"
		  axios.get(url_)
		    .then(response => response.data)
		    .then((response) => {
		    
		      let data = response;
		      console.log(response);
		      this.setState({data : data});

		    }).catch((err) => { console.log(err); });    
	}

	render(){

		const data  = this.props.data.GithubReducer.data;
		const bio   = data.bio;
		const login = data.login;
		const chart = "http://ghchart.rshah.org/"+ login;
		let chart_pic;

		if(Object.keys(data).length !== 0){
			chart_pic = (<img src={chart} alt="Github chart" />);
	    }

		return(
				  <div>
				  		<Header data = {data}/>
				  <div>
				  		<div className = "_m-top">
								{chart_pic}
						</div>
				  </div>

				     <div className="custom-panel-css">
					     {this.state.data.map((repo,index) => {
					     	return(
					     	   <div>
							  	<div className="card-2 col-lg-5 ">

							  		
		  							<div className="panel panel-default _margin-top">
			 					      <div className="panel-heading"><a href = {repo.html_url}> {repo.name} </a></div>
			 					    </div>

			 					    <div>	
			 					    	<h3>aaslakskslk</h3>
			 					    </div>

			 					    <div>
			 					    	<h3>language</h3>
			 					    </div>
			 					    <div>
			 					    	Started <Moment from={new Date()}>{repo.created_at}</Moment>
			 					    </div>

			 					    <div className="panel panel-default _margin-top">
			 					      <div className="panel-heading"><a href = {repo.html_url}> {repo.name} </a></div>
			 					    </div>

							  	</div>
							  </div>
					     	)
					     })}
					   
				    </div>
					

			  	  </div>
		)
	}
}


  // <div className="panel panel-default">
		// 					      <div className="panel-heading"><a href = {repo.html_url}> {repo.name} </a></div>
		// 					      <div className="panel-body">{repo.description}</div>
		// 					    </div>
