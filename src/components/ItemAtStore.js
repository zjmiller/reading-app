import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoneyOneCurrency from './MoneyOneCurrency';

import buyItemAtStore from '../actions/buyItemAtStore';

class ItemAtStore extends Component {
  render() {
		const {
			handleBuyItemAtStore,
			item,
		} = this.props;
		
		const { 
			name,
		} = item;
		
    return (
      <div
				onClick={() => handleBuyItemAtStore(item.id)}
				style={{
					backgroundColor: '#f5f5dc',
					boxShadow: '2px 2px 5px #333',
					display: 'flex',
					height: '120px',
					padding: '10px',
					width: '350px',
				}}
			>
			
				<img 
					src={item.imgSrc}
					style={{
						boxShadow: '0 0 1px #333',
						filter: 'saturate(300%) hue-rotate(180deg)',
						width: '100px',
					}}
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						padding: '0 15px',
					}}
				>
					<span
						style={{
							fontFamily: 'Georgia',
							fontSize: '18px',
							fontWeight: 600,
							textAlign: 'center',
						}}
					>
						{ name }
					</span>
					<div
						style={{
							display: 'flex',
							marginBottom: '5px',
						}}
					>
						{item.cost.map(({moneyType, quantity}, i, arr) => 
							<MoneyOneCurrency
								key={i}
								moneyType={moneyType}
								quantity={quantity}
								style={{
									border: '1px solid #333',
									boxShadow: 'none',
									marginRight: i < arr.length - 1 ? '5px' : '0px',
								}}
							/>
						)}
					</div>
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  handleBuyItemAtStore: itemId => dispatch(buyItemAtStore(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemAtStore);