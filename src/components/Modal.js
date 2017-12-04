import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import backgroundImageSrc from '../assets/images/battleback8.png';

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
	
  render() {
		const {
			isReceivingReward,
			receivingRewardState,
		} = this.props;
		
    return (
      <div>
				<Modal show={isReceivingReward}>
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
		receivingRewardState: state.session.receivingRewardState,
  };
};

export default connect(mapStateToProps)(SuccessModal);