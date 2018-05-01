import React, { Component } from 'react';
import './App.css';
import {Button} from './Components/button';




class App extends Component {

 constructor(props){
  super(props);

  this.state = {
    data: ''
  }
 }


 handleClick(){
  console.log('zu-zu')
 }


  render() {
    return (
      <div className="App">
       <Button  onClick = {(e)=> {this.handleClick(e)}}/>
      </div>
    );
  }
}

export default App;
