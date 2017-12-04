import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import closeRewardModal from '../actions/closeRewardModal';
import backgroundImageSrc from '../assets/images/battleback8.png';
import areAllRewardCardsRevealed from '../selectors/areAllRewardCardsRevealed';

import Chest from './Chest';
import RewardCards from './RewardCards';

class SuccessModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardWidth: 0,
			testFlipped: false,
		};
	}
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.receivingRewardState === 'CHEST_OPENED' && this.props.receivingRewardState !== nextProps.receivingRewardState) {
			setTimeout(() => this.setState({cardWidth: 180}), 10);
		}
	}
	
	handleHideRewardModal = () => {
		if (this.props.areAllRewardCardsRevealed) {
			this.props.handleCloseRewardModal();
			this.setState({
				cardWidth: 0,
			});
		}
	}
	
  render() {
		const {
			areAllRewardCardsRevealed,
			handleCloseRewardModal,
			isReceivingReward,
			receivingRewardState,
		} = this.props;
		
    return (
      <div>
				<Modal show={isReceivingReward} onHide={this.handleHideRewardModal}>
					<Modal.Body 
						style={{
							alignItems: 'center',
							backgroundImage: `url(${backgroundImageSrc})`,
							backgroundSize: 'cover',
							borderRadius: '5px',
							display: 'flex',
							height: '410px',
							justifyContent: 'center',
						}}>
						{
							receivingRewardState === 'CHEST_APPEARING'
							&&
							<Chest />
						}
						{
							receivingRewardState === 'CHEST_OPENED'
							&&
							<RewardCards cardWidth={this.state.cardWidth} />
						}
					</Modal.Body>
				</Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
		areAllRewardCardsRevealed: console.log(areAllRewardCardsRevealed(state)) || areAllRewardCardsRevealed(state),
		isReceivingReward: state.session.engagementState === 'RECEIVING_REWARD',	
		receivingRewardState: state.session.receivingRewardState,
  };
};

const mapDispatchToProps = dispatch => ({
  handleCloseRewardModal: () => dispatch(closeRewardModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);