import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state={
          username:"",
          password:"",
                };
      this.setUsername=this.setUsername.bind(this);
      this.setPassword=this.setPassword.bind(this); 
      this.handleLogin=this.handleLogin.bind(this);      
     }
  
     setUsername(value){
       this.setState({username:value});
     }
     setPassword(value){
       this.setState({password:value});
     }

     handleLogin(){
          alert('Username: ${this.state.username} Password: ${ this.state.password}')};

     render(){
         return(
             <div>
                 <input onChange={(event)=> this.setUsername(event.target.value)} type = "setUsername"/> 
                 <input onChange={(event)=> this.setPassword(event.target.value)} type = "setPassword"/>
                 <button onClick={this.handleLogin}>Login</button>
            </div>
         )
     }
  }

  export default Login;
