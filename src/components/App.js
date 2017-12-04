import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import Engagement from './Engagement';
import Wealth from './Wealth';

import createAndEnterEngagement from '../actions/createAndEnterEngagement';
import handleLetterDrop from '../actions/handleLetterDrop';
import setWealth from '../actions/setWealth';

import fetchWealthInformation from '../api/fetchWealthInformation';

class App extends Component {
	componentDidMount() {
		this.props.handleSetWealth(this.props.initialWealth);
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
	initialWealth: fetchWealthInformation(),
});

const mapDispatchToProps = dispatch => ({
  handleCreateAndEnterEngagement: () => dispatch(createAndEnterEngagement()),
	handleSetWealth: wealth => dispatch(setWealth(wealth)),
	onDragEndHandleLetterDrop: result => {
	 	if (!result.destination) return; // dropped outside droppable
		dispatch(handleLetterDrop(result))
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
