import React, { Component } from 'react';
import './splash.css';

const styles = {
    container: {
      display: 'flex',
      height: '100%',
      width: '100%',
      border: '1px solid black'
    }
};

class SplashScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default SplashScreen;
