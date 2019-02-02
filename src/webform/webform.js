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
		alignItems: 'center'
		//overflowY: 'scroll'
	},
	innerContainer: {
		display: 'flex',
		flexFlow: 'column',
		height: 'min-content',
		overflowX: 'hidden',
	},
	header: {
		height: 90,
		width: '100%',
		backgroundColor: '#003b64',
		display: 'flex',
		justifyContent: 'center'
	},
	innerHeader: {
		width: '70%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	logo: {
		width: 70,
		height: 70
	},
	body: {
		width: '70%',
		marginBottom: 20
	},
	confirmationText: {
		marginTop: 10,
		marginBottom: 10
	},
};

class WebformScreen extends Component {
	render() {
		return (
			<div style={styles.container}>
				<div style={styles.header}>
					<div style={styles.innerHeader}>
						<img style={styles.logo} src={'https://images.bbycastatic.ca/sf/images/common/main-logo.svg'} alt=''/>
					</div>
				</div>
				<div style={styles.body}>
					<h1 style={styles.confirmationText}>Confirmation</h1>
					<h3>You have successfully made the order</h3>
				</div>
				<div style={styles.innerContainer} className="responsive-form">

					<WebformHeader
						title="Peace of Mind"
						subtitle="Buying this for a loved one? Get notified when something goes wrong."
						headerImg={MockHeaderImage}
						height={200}
						learnMoreURL="https://www.omronhealthcare.ca/blood-pressure/"
					/>
					<div style={{display: 'flex', flexFlow: 'column'}}>
						<RegistrationForm />
						<InfoPanel title={MOCK_INFO_TITLE} text={MOCK_INFO_TEXT} />
					</div>

				</div>
			</div>
		);
	}
}

export default WebformScreen;
