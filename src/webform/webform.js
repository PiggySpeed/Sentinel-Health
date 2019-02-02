import React, { Component } from 'react';
import './webform.css';

// import MockHeaderImage from './mock_header_image.png';
import MockHeaderImage from './background_1.png';
import WebformHeader from './webformheader/webformheader';
import RegistrationForm from './registrationform/registrationform';
import InfoPanel from './infopanel/infopanel'

const MOCK_INFO_TITLE = "Mock Infopanel title";
const MOCK_INFO_TEXT = "Mock Infopanel body text";


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
    height: 'min-content',
    overflowX: 'hidden'
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
            height={200}
            learnMoreURL="https://www.omronhealthcare.ca/blood-pressure/"
          />
          <div className="responsive-form">
            <RegistrationForm />
            <InfoPanel title={MOCK_INFO_TITLE} text={MOCK_INFO_TEXT} />
          </div>

        </div>
      </div>
    );
  }
}

export default WebformScreen;
