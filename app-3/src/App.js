import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      list:[
      "spaghetti",
       "ice cream",
       "sushi",
       "bologna",
      "cheese", 
      ],
      input: ""
    };
     this.updateInput=this.updateInput.bind(this);
  }
  updateInput(event){
    this.setState({input:event.target.value});

  }

  render() {
    console.log(this.state.input)
    let listDisplay = this.state.list.filter((element, index)=>{
      return element.includes(this.state.input);
      
    })
    .map((element, index)=> {
      return (
        <h2 key ={index}>{element}</h2> 
      )
    })
    
    return (
      <div className="App">
      <input value = {this.state.theInput} onChange={this.updateInput} />
        <h1> {this.state.theInput} </h1>
        {listDisplay}
        
      </div>
    );
  }
}

export default App;
