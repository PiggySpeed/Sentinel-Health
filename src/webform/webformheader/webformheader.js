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
  headerBar: {
    height: 200,
    width: '100%',
    backgroundColor: '#0673AE',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-end',
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
    // textShadow: '0px 0px 5px #000000',
    fontSize: 28
  },
  subtitle: {
    color: 'white',
    // textShadow: '0px 0px 5px #000000'
  },
  learnmore: {
    color: 'white',
    textDecoration: 'underline',
  }
};
let language = 0;
class WebformHeader extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.setState({
      language: 0,
    });
  }

  render() {
    const {language} = this.props;
    return (
      <div style={styles.container({height: this.props.height})}>
        {/*<img src={this.props.headerImg} style={styles.headerImg} />*/}
        <div style={styles.headerBar}>
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>{this.props.title}</h1>
          <span>
            <h2 style={styles.subtitle}>{this.props.subtitle}</h2>
            <a href={this.props.learnMoreURL} style={styles.learnmore}>{(language == '0') ? 'Learn More' : '더 알아보기'}</a>
          </span>
        </div>
      </div>
    );
  }
}

WebformHeader.propTypes = {
  language: String,
}

export default WebformHeader;
