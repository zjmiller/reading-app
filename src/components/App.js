import React, { Component } from 'react';
import { connect } from 'react-redux';
import createEngagement from '../actions/createEngagement';
import Engagement from './Engagement';
import './App.css';

class App extends Component {
  render() {
		const { handleCreateEngagement, state } = this.props;
		
    return (
      <div className="App">
        <button  onClick={handleCreateEngagement} />
				{ JSON.stringify(state) }
				<Engagement />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  handleCreateEngagement: () => console.log('h') || dispatch(createEngagement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
