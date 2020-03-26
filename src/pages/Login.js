import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
// import login from '../images/login.jpg';


class Login extends Component {

  render() {
  
    return (        

      <div>

        <div className="App">
          <header className="App-header">
            
            <div>Welcome to Discofy</div>

            <img src={logo} className="App-logo" alt="logo" />

            <button
                type="button" 
                onClick={this.props.handleLogin}>
                Login
            </button>

          </header>
        </div>

        {/* <img
            className="img"
            src={login} 
            alt="speaker"
        /> */}
            
      </div>

    );

  }

}

export default Login;