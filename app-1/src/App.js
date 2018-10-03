import React, { Component } from 'react';

class App extends Component {
        constructor (){
          super ()
          this.state = {theInput:""};
          this.updateText=this.updateText.bind(this);
        }

     updateText(event){
       this.setState({theInput:event.target.value});

   
     }   
  
  render() {
    console.log("this.state", this.state)
    return (
      <div className="App">
       <input value = {this.state.theInput} onChange= {this.updateText} />
        <h1> {this.state.theInput} </h1>
      </div>
    );
  }
}

export default App;
