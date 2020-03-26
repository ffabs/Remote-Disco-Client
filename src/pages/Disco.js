import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
// import disco from '../images/disco.jpg';


class Disco extends Component {

  render() {
  
    return (        

      <div className="App">

        <header className="App-header"> 

            <div>Disco 🕺</div>

            <img src={logo} className="App-logo" alt="logo" />

            <button
                type="button" 
                onClick={this.props.handleLogout}>
                Logout
            </button>

            {/* <img
                className="img"
                src={disco} 
                alt="color"
            /> */}

        </header>

      </div>

    );

  }

}

export default Disco;