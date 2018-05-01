import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

import {Button} from './Components/button';
import {Input} from './Components/input';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {api_data} from './action_creators/api_data';

import {Reducer} from './Reducers/reducers';


class App extends Component {

 constructor(props){
  super(props);

  this.state = {
    username: '',
    data :[]
  }
 }

 componentWillMount(){
  console.log(this);
 }

 componentDidMount(){
  console.log(this);
 }

 handleClick(){

  let url_ = "https://api.github.com/users/"+ this.state.username;

  axios.get(url_)
    .then(response => response.data)
    .then((response) => {
    
      let data = this.state.data.concat(response)[0];
      this.setState({data : data})
      this.props.api_data(this.state.data);

    }).catch((err) => { console.log(err); });

    
 }

 handleChange(event){
  this.setState({
    username:event.target.value
  })
 }

  render() {

    console.log('parsed data',this.props.data);
 
    return (
      <div className="App">

       <Input value = {this.state.username} onChange = {(e) => {this.handleChange(e)}}/>
       <Button  onClick = {(e)=> {this.handleClick(e)}}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    'data':state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({api_data}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

