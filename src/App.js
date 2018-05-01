import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {Button} from './Components/button';
import {Input} from './Components/input';


class App extends Component {

 constructor(props){
  super(props);

  this.state = {
    username: '',
    avatar_url:''
  }
 }


 handleClick(){

  let url_ = "https://api.github.com/users/"+ this.state.username;
  console.log(url_);
  axios.get(url_)
    .then(response => response.data.avatar_url)
    .then((avatar_url) => {
      this.setState({
        avatar_url: avatar_url
      })
    })
 }

 handleChange(event){
  this.setState({
    username:event.target.value
  })
 }

  render() {

    let avatar_;
    if(this.state.avatar_url != '')
           avatar_ =  <img src={this.state.avatar_url}  className = "_img img-responsive" alt="Smiley face" />
      else {
           avatar_ = '';
      }
 
    return (
      <div className="App">

       <Input value = {this.state.username} onChange = {(e) => {this.handleChange(e)}}/>
       <Button  onClick = {(e)=> {this.handleClick(e)}}/>
        {avatar_}
      </div>
    );
  }
}

export default App;
