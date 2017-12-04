import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import createAndEnterEngagement from '../actions/createAndEnterEngagement';
import handleLetterDrop from '../actions/handleLetterDrop';
import Engagement from './Engagement';
import Wealth from './Wealth';

class App extends Component {
	componentDidMount() {
		this.props.handleCreateAndEnterEngagement();
	}
	
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
						paddingTop: '15px',
						width: '100%',
					}}
				>
					<Wealth />
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
