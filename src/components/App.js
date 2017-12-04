import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import createAndEnterEngagement from '../actions/createAndEnterEngagement';
import handleLetterDrop from '../actions/handleLetterDrop';
import Engagement from './Engagement';
import Wealth from './Wealth';

class App extends Component {
  render() {
		const {
			currentlyInEngagement,
			handleCreateAndEnterEngagement, 
			onDragEndHandleLetterDrop,
		} = this.props;
		
    return (
			<DragDropContext onDragEnd={result => onDragEndHandleLetterDrop(result)}>
	      <div
					style={{
						overflow: 'hidden',
						width: '100%',
					}}
				>
					<Wealth />
	        <button onClick={handleCreateAndEnterEngagement}>START</button>
					{currentlyInEngagement && <Engagement />}
	      </div>
			</DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
	currentlyInEngagement: !!state.session.inEngagement,
});

const mapDispatchToProps = dispatch => ({
  handleCreateAndEnterEngagement: () => dispatch(createAndEnterEngagement()),
	onDragEndHandleLetterDrop: result => {
	 	if (!result.destination) return; // dropped outside droppable
		dispatch(handleLetterDrop(result))
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
