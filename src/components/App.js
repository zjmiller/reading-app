import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import createEngagement from '../actions/createEngagement';
import Engagement from './Engagement';
import './App.css';

class App extends Component {
  render() {
		const { handleCreateEngagement, state } = this.props;
		
    return (
			<DragDropContext onDragEnd={() => {}}>
	      <div className="App">
	        <button  onClick={handleCreateEngagement} />
					{ JSON.stringify(state) }
					<Engagement />
	      </div>
			</DragDropContext>
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
