import React, { Component } from 'react';
import './App.css';

import Splash from "./splash/splash.js";
import Family from "./family/family.js";
import Member from "./member/member.js";
import Device from "./device/device.js";

class App extends Component {

	sendEmail() {
		// Temporary sending to a local server, will spin a real one when I wake up, if necessary
		const url = "http://localhost:8000/send"; // site that doesn’t send Access-Control-*
		fetch(url)
			.then(response => response.text())
			.then(contents => console.log(contents))
			.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}

	render() {
		return (
			<div className="App" >
				{/* <Splash /> */}
				<Family />
				{/*<Member />*/}
				{/*<Device />*/}
			</div>
		);
	}
}

export default App;
