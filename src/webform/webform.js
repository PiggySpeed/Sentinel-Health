import React, { Component } from 'react';
import './webform.css';
import {Button, Icon} from 'semantic-ui-react';
// import MockHeaderImage from './mock_header_image.png';
import MockHeaderImage from './background_1.png';
import WebformHeader from './webformheader/webformheader';
import RegistrationForm from './registrationform/registrationform';
import InfoPanel from './infopanel/infopanel';

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

	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.setState({
			language: 0,
		  });
	}

	changeLanguage = (value) =>{
		console.log(value);
		this.setState({
		  language: value,
		});
	}

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
						title={(this.state.language=='0') ? "Peace of Mind" : "마음의 평화"}
						subtitle={(this.state.language == '0') ? "Buying this for a loved one? Get notified when something goes wrong." : "사랑하는 사람을 위해 이것을 사면 무엇인가 잘못되었을 때 통보 해주십시오."}
						headerImg={MockHeaderImage}
						height={200} language={this.state.language}
						learnMoreURL="https://www.omronhealthcare.ca/blood-pressure/"
					/>

					{(this.state.language == 0)
						? <Button style={{height: 50, width: 50}} icon='world'
						onClick={() => this.changeLanguage(1)}/>
						: <Button style={{height: 50, width: 50}} icon='clock'
						onClick={() => this.changeLanguage(0)} />
					}
					<div style={{display: 'flex', flexFlow: 'column'}}>
						<RegistrationForm language={this.state.language}/>
					</div>
					<div style={{flex:'none', height: '400px', width: '100%' }}> </div>

				</div>
			</div>
		);
	}
}

export default WebformScreen;
