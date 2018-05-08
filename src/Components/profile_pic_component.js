
// <img classNameName ="_mg" src = {props.data.avatar_url} width = "240" />

import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Routes/routes_headers';
import { Link } from 'react-router-dom'


export class Profile extends React.Component{


	render(){

		const data       = this.props.data.GithubReducer.data;
		const avatar_url = data.avatar_url;
		const user_name  = data.name;
		const blog       = data.blog;
		const bio        = data.bio;
		let _html;
		
		if(Object.keys(data).length !== 0){
			_html = (
						<div className = "_mg">
							<main>
								  <div className="card">
								    <img src={avatar_url} className="card-image" />
								    <div className="card-title">
								      <h1>{user_name}</h1>
								      <h2><a href = {blog} >{blog} </a></h2>
								    </div>
								    <div className="card-info">
								      {bio}
								    </div>
								    <div className="card-social">
								      <a href="#"><i className="fa fa-facebook-f"></i></a>
								      <a href="#"><i className="fa fa-twitter"></i></a>
								      <a href="#"><i className="fa fa-instagram"></i></a>
								      <a href="#"><i className="fa fa-music"></i></a>
								      <a href="#"><i className="fa fa-soundcloud"></i></a>
								    </div>
								  </div>
							</main>
						</div>	
					);
	    }
	    else
	    {
	    	_html = (
		    		<div className = "_text-align">
		    			<h3> Please Search The User In The <Link to='/'>Home</Link> Page. </h3>
		    		</div>
	    		)
	    }

		return(
			<div>
				<Header data = {data}/>
				{_html}
			</div>
		)
	}
}



		
