import React, { Component } from 'react';
import './webform.css';

import MockHeaderImage from './mock_header_image.png';
import WebformHeader from './webformheader/webformheader';
import RegistrationForm from './registrationform/registrationform';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '100%',
    overflowY: 'scroll'
  },
  innerContainer: {
    display: 'flex',
    flexFlow: 'column',
    height: 'min-content'
  }
};

class WebformScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <WebformHeader
            title="Peace of Mind"
            subtitle="Buying this for a loved one? Get notified when something goes wrong."
            headerImg={MockHeaderImage}
            height={500}
            learnMoreURL="https://www.omronhealthcare.ca/blood-pressure/"
          />
          <RegistrationForm />
        </div>
      </div>
    );
  }
}

export default WebformScreen;
