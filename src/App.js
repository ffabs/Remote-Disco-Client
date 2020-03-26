import React, { Component } from 'react';
import Login from './pages/Login';
import Disco from './pages/Disco';
import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      login: false,
    };
  }

  handleLogin = event => {
    this.setState({
      login: true
    });
  }

  handleLogout = event => {
    this.setState({
      login: false
    });
  }

  render() {

    return (

      <div className="App">

          {this.state.login === false &&
            <Login 
              handleLogin={this.handleLogin}
            />
          }

          {this.state.login === true &&
            <Disco 
              handleLogout={this.handleLogout}
            />
          } 

      </div>

    );
  }

}

export default App;
