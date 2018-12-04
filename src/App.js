import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleButtonAction } from './app.actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.warn(this.props);
    const { toggleButton, toggleButtonAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <button onClick={toggleButtonAction}>
              Change Redux Store Value
            </button>
            Learn React&nbsp;
            { toggleButton ? "I am set to true" : "I am set to False" }
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state.app
});

export default connect(
  mapStateToProps,
  {
    toggleButtonAction
  }
)(App);
