import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoneyOneCurrency from './MoneyOneCurrency';

class Wealth extends Component {
  render() {
    const { wealth } = this.props;

    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '130px',
          position: 'fixed',
          justifyContent: 'space-between',
          right: '10px',
          top: '10px',
          zIndex: 3,
        }}
      >
        <MoneyOneCurrency
          moneyType="GOLD_COIN"
          quantity={wealth['GOLD_COIN']}
        />
        <MoneyOneCurrency moneyType="BLUE_GEM" quantity={wealth['BLUE_GEM']} />
        <MoneyOneCurrency
          moneyType="GREEN_GEM"
          quantity={wealth['GREEN_GEM']}
        />
        <MoneyOneCurrency moneyType="RED_GEM" quantity={wealth['RED_GEM']} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const wealth = state.session.wealth;
  return {
    wealth,
  };
};

export default connect(mapStateToProps)(Wealth);
