import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import AnswerModal from './AnswerModal';
import Engagement from './Engagement';
import ScreenLinks from './ScreenLinks';
import Store from './Store';
import Wealth from './Wealth';

import createAndEnterEngagement from '../actions/createAndEnterEngagement';
import handleLetterDrop from '../actions/handleLetterDrop';
import setWealth from '../actions/setWealth';

import fetchWealthInformation from '../api/fetchWealthInformation';

class App extends Component {
	componentDidMount() {
		if (!localStorage.getItem('READING_APP_STATE')) this.props.handleSetWealth(this.props.initialWealth);
		if (!this.props.currentlyInEngagement) this.props.handleCreateAndEnterEngagement();
	}
	
  render() {
		const {
			onEngagementScreen,
			onStoreScreen,
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
					<ScreenLinks />
					<Wealth />
					{onEngagementScreen && <Engagement />}
					{onStoreScreen && <Store />}
	      </div>
				<AnswerModal />
			</DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
	currentlyInEngagement: state.session.inEngagement,
	onEngagementScreen: state.session.currentScreen === 'ENGAGEMENT',
	onStoreScreen: state.session.currentScreen === 'STORE',
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
