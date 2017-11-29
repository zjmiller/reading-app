import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import createEngagement from '../actions/createEngagement';
import handleLetterDrop from '../actions/handleLetterDrop';
import Engagement from './Engagement';

class App extends Component {
  render() {
		const {
			handleCreateEngagement, 
			onDragEndHandleLetterDrop,
			state
		} = this.props;
		
    return (
			<DragDropContext onDragEnd={result => onDragEndHandleLetterDrop(result)}>
	      <div
					style={{
						overflow: 'hidden',
						width: '100%',
					}}
				>
	        <button onClick={handleCreateEngagement}>START</button>
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
  handleCreateEngagement: () => dispatch(createEngagement()),
	onDragEndHandleLetterDrop: result => {
	 	if (!result.destination) return; // dropped outside droppable
		dispatch(handleLetterDrop(result))
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
