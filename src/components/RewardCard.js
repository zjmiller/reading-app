import React, { Component } from 'react';
import { connect } from 'react-redux';

class RewardChest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			testFlipped: true,
			cardWidth: 180,
		}
	}
	
  render() {
    return (
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
			</div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(RewardChest);