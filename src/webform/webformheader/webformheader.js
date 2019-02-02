import React, { Component } from 'react';

const styles = {
  container: ({height}) => {
    return {
      position: 'relative',
      display: 'flex',
      flex: 'none',
      height: height,
      width: '100%',
      overflow: 'hidden'
    }
  },
  headerImg: {
    height: 'auto',
    width: '100%'
  },
  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1rem'
  },
  title: {
    position: 'relative',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0px 0px 5px #000000',
    fontSize: 28
  },
  subtitle: {
    color: 'white',
    textShadow: '0px 0px 5px #000000'
  },
  learnmore: {
    textDecoration: 'underline',
  }
};

class WebformHeader extends Component {
  render() {
    return (
      <div style={styles.container({height: this.props.height})}>
        <img src={this.props.headerImg} style={styles.headerImg} />
        <div style={styles.textContainer}>
          <h1 style={styles.title}>{this.props.title}</h1>
          <span>
            <h2 style={styles.subtitle}>{this.props.subtitle}</h2>
            <a href={this.props.learnMoreURL} style={styles.learnmore}>Learn More</a>
          </span>
        </div>
      </div>
    );
  }
}

export default WebformHeader;
