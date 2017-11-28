import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
		const { test } = this.props;
		
    return (
      <div className="App">
        { test }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test,
});

export default connect(mapStateToProps)(App);
