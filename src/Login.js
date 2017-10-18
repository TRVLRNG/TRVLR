
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import {Route, Redirect} from 'react-router';
import Bigtable from './Bigtable.js';

var that;
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  logged:false
  }
  this.handleClick = this.handleClick.bind(this)
 }

handleClick(e) {
  that = this;
  axios.post('/login', {username: this.state.username, password:this.state.password})
  .then(function(response){
    console.log(response);
  })
  .then(function(){
    console.log('hello')
    that.setState({logged:true})
  })
}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            {(this.state.logged === true) && <Redirect to= '/Home'/>}
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;