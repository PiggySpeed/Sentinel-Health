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
    border: '1px solid black'
  }
};

class WebformScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <WebformHeader
          title="Peace of Mind"
          subtitle="Buying this for a loved one? Get notified when something goes wrong."
          headerImg={MockHeaderImage}
          height={200}
          learnMoreURL="https://www.omronhealthcare.ca/blood-pressure/"
        />
        <RegistrationForm />
      </div>
    );
  }
}

export default WebformScreen;
