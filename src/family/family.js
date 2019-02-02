import React, { Component } from 'react';
import './family.css';

const styles = {
	container: {
		display: 'flex',
		height: '100%',
		width: '100%',
		border: '1px solid black',
		flexDirection: 'column',
		alignItems: 'center'
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
	},
	confirmationText: {
		marginTop: 10,
		marginBottom: 10
	},
	optInContainer: {
		width: '100%',
		borderRadius: 3,
		borderWidth: 1
	},
	optInHeader: {
		height: 50,
		width: '100%',
		background: 'linear-gradient(to right bottom, #2e3337, #003b64)',
	}
};

class FamilyScreen extends Component {
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
			</div>
		);
	}
}

export default FamilyScreen;
