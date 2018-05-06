import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

import {Button} from './Components/button';
import {Input} from './Components/input';
import {Picture} from './Components/profile_pic_component';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {api_data} from './action_creators/api_data';
import Header from './Routes/routes_headers';


class App extends React.Component {

 constructor(props){
  super(props);

  this.state = {
    username: '',
    data :{}
  }
 }

 ComponentDidUpdate(){
  console.log('new state', this);
 }


 handleClick(){

  let url_ = "https://api.github.com/users/"+ this.state.username;

  axios.get(url_)
    .then(response => response.data)
    .then((response) => {
    
      let data = response;
      this.setState({data : data});
      this.props.api_data(this.state.data);

    }).catch((err) => { console.log(err); });    
 }

 handleChange(event){
  this.setState({
    username:event.target.value
  })
 }

  render() {

    console.log('parsed data',this);
 
    return (
      <div className="App">

       <Input value = {this.state.username} onChange = {(e) => {this.handleChange(e)}}/>
       <Button  onClick = {(e)=> {this.handleClick(e)}}/>
       <Picture data = {this.state.data}/>
       <Header />

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({api_data}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

