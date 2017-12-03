import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';

import openChest from '../actions/openChest';
import backgroundImageSrc from '../assets/images/battleback8.png';
import blueGemImgSrc from '../assets/images/gemBlue.png';
import cardBackImgSrc from '../assets/images/card-back.jpeg';
import chestImgSrc from '../assets/images/chest.png';

class SuccessModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardWidth: 0,
			chestOpacity: 1,
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
			handleOpenChest,
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
							<img
								onClick={handleOpenChest}
								src={chestImgSrc}
								style={{
									cursor: 'pointer',
									opacity: this.state.chestOpacity,
									transition: 'opacity 0.4s',
									width: '100%',
								}} 
							/>
						}
						{
							receivingRewardState === 'CHEST_OPENED'
							&&
							[
								<div className={this.state.testFlipped ? 'flipcard is-flipped' : 'flipcard'} key="1">
									<div className="flipcard--front">
										<img
											onClick={() => this.setState({ testFlipped: true })}
											src={cardBackImgSrc}
											style={{
												border: '2px solid #333',
												borderRadius: '8px',
												boxShadow: '0px 0px 5px #333',
												cursor: 'pointer',
												height: `${217*(this.state.cardWidth/180)}px`,
												marginLeft: '20px',
												marginRight: '20px',
												transition: 'height 0.4s cubic-bezier(1,.46,.41,1.46), width 0.4s cubic-bezier(1,.46,.41,1.46)',
												width: `${this.state.cardWidth}px`,
											}} 
										/>
									</div>
									<div
										className="flipcard--back"
										style={{
											alignItems: 'center',
											backgroundColor: '#f5f5dc',
											border: '2px solid #333',
											borderRadius: '8px',
											boxShadow: '0px 0px 5px #333',
											display: 'flex',
											flexDirection: 'column',
											marginLeft: '20px',
											marginRight: '20px',
											height: `${217*(this.state.cardWidth/180)}px`,
											justifyContent: 'center',
											width: `${this.state.cardWidth}px`,
										}}
									>
									
										<span
											style={{
												fontSize: '36px'
											}}
										>
											3
										</span>
										<img src={blueGemImgSrc} />
									</div>
								</div>,
								<img
									key="2"
									src={cardBackImgSrc}
									style={{
										border: '2px solid #333',
										borderRadius: '8px',
										boxShadow: '0px 0px 5px #333',
										cursor: 'pointer',
										marginLeft: '20px',
										marginRight: '20px',
										transition: 'width 0.4s cubic-bezier(1,.46,.41,1.46)',
										width: `${this.state.cardWidth}px`,
									}} 
								/>,
								<img
									key="3"
									src={cardBackImgSrc}
									style={{
										border: '2px solid #333',
										borderRadius: '8px',
										boxShadow: '0px 0px 5px #333',
										cursor: 'pointer',
										marginLeft: '20px',
										marginRight: '20px',
										transition: 'width 0.4s cubic-bezier(1,.46,.41,1.46)',
										width: `${this.state.cardWidth}px`,
									}} 
								/>
							]
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

const mapDispatchToProps = dispatch => ({
  handleOpenChest: () => dispatch(openChest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);