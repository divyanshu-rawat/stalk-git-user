


import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Routes/routes_headers';
import axios from 'axios';
import Moment from 'react-moment';
import '../App.css';
import { Link } from 'react-router-dom'


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
		let _html;

		if(Object.keys(data).length !== 0){
			chart_pic = (
							<div className = "_m-top _text-align">
								<h3>Contributions In The Last Year</h3>
								<img src={chart} alt="Github chart" />
						    </div>
					);
	    }

	    if(this.state.data.length > 1){

	    	_html = this.state.data.map((repo,index) => {
					     	return(
					     	   <div>
							  	<div className="card-2 col-lg-5 ">

							  		
		  							<div className="panel panel-default _margin-top">
			 					      <div className="panel-heading">
			 					      	<a href = {repo.html_url}> {repo.name} </a>
			 					      	<span className = "pull-right">Created On <Moment format="YYYY/MM/DD">{repo.created_at}</Moment></span>
			 					      	</div>
			 					    </div>

			 					    <div>	
			 					    	<h3>Project Description :</h3> <p> {repo.description}</p>
			 					    </div>

			 					    <div>
			 					    	<h3>Language : </h3> <p>{repo.language}</p>
			 					    </div>
			 					    <div>

			 					    </div>

			 					    <div className="panel panel-default _margin-top">
			 					      <div className="panel-heading _panel-padding">
			 					      	<p className = "_zero_mr _text-align ">
			 					      		<i className="fa fa-star pull-left" aria-hidden="true"><span className = "_mg-left">{repo.stargazers_count}</span></i>

			 					      		<i className="fa fa-eye" aria-hidden="true"></i><span className = "_mg-left">{repo.watchers}</span>

			 					      		<i className="fa fa-code-fork pull-right" aria-hidden="true"><span className = "_mg-left">{repo.forks_count}</span></i>

			 					      	</p>
			 					      </div>
			 					    </div>

							  	</div>
							  </div>
					     	)
					     })
	    }
	    else{
	    	_html = (
		    		<div className = "_text-align">
		    			<h3> Please Search The User In The <Link to='/'>Home</Link> Page. </h3>
		    		</div>
	    		)
	    }

		return(
				  <div>
				  	<Header data = {data}/>
					  <div>
							{chart_pic}
					  </div>

				     <div className="custom-panel-css">
					     {_html}
				    </div>
			  	  </div>
		)
	}
}
