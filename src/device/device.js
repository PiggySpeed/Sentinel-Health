import React, { Component } from 'react';
import './device.css';

import Header from './header';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    border: '1px solid black'
  }
};

class DeviceScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
      </div>
    );
  }
}

export default DeviceScreen;
