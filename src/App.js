import React, { Component } from 'react';
import './App.css';

import Splash from "./splash/splash.js";
import Family from "./family/family.js";
import Member from "./member/member.js";
import Device from "./device/device.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        {/*<Family />*/}
        {/*<Member />*/}
        {/*<Device />*/}
      </div>
    );
  }
}

export default App;
