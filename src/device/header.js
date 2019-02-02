import React from 'react';
import MockImage from './bp_machine.png';

const styles = {
  container: {
    display: 'flex',
    border: '1px solid red',
    height: 75,
    width: '100%'
  },
  image: {
    height: '100%'
  },
  textContainer: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '100%',
    border: '1px solid red'
  },
  headerText: {
    width: '100%'
  },
  bodyText: {
    width: '100%'
  }
};

const Header = () => (
  <div style={styles.container}>
    <img style={styles.image} src={MockImage} />
    <div style={styles.textContainer}>
      <h1 style={styles.headerText}>Blood pressure machine</h1>
      <p style={styles.bodyText}>Blood pressure machine Text</p>
    </div>
  </div>
);

export default Header;
