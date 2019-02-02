import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

const styles = {
  container: {
    display: 'flex',
    flex: 'none',
    flexFlow: 'column',
    height: 'min-content',
    padding: '1rem',
    margin: '1rem',
    minHeight: 400
  },
  title: {
    fontSize: 26
  },
  text: {
    fontSize: 16
  }
};

class Infopanel extends Component {
  render() {
    return (
      <Message color="yellow" style={styles.container}>
        <h1 style={styles.title}>{this.props.title}</h1>
        <p style={styles.text}>{this.props.text}</p>
      </Message>
    );
  }
}

export default Infopanel;
