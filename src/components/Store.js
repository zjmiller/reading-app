import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemAtStore from './ItemAtStore';
import StoreBackground from './StoreBackground';
class Store extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        <StoreBackground />
        <div
          style={{
            position: 'relative',
            margin: '50px auto',
            width: '700px',
            zIndex: 2,
          }}
        >
          {items.map(item => (
            <ItemAtStore
              key={item.id}
              item={item}
              style={{ marginBottom: '10px' }}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Store);
