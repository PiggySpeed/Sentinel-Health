import React, { Component } from 'react';

const styles = {
  container: ({height}) => {
    return {
      position: 'relative',
      display: 'flex',
      height: height,
      width: '100%',
      overflow: 'hidden'
    }
  },
  headerImg: {
    height: '100%',
    width: 'auto'
  },
  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexFlow: 'column',
    bottom: 0,
    left: 0,
    padding: '1rem'
  },
  title: {
    position: 'relative',
    color: 'black',
    fontSize: 28
  },
  subtitle: {
    color: 'black'
  },
  learnmore: {

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
