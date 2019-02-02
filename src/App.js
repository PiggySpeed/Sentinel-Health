import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Splash from "./splash/splash.js";
import Family from "./family/family.js";
import Member from "./member/member.js";
import Device from "./device/device.js";
import Webform from "./webform/webform.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{ display: 'flex', flexFlow: 'column', width: '100%', height: '100%' }}>
            <div>
              <Link to="/family">Family</Link>
              <Link to="/member">Member</Link>
              <Link to="/about">Device</Link>
              <Link to="/webform">Webform</Link>
            </div>
            <Route path="/" exact component={Device} />
            <Route path="/family" exact component={Family} />
            <Route path="/member" exact component={Member} />
            <Route path="/device" exact component={Device} />
            <Route path="/webform" exact component={Webform} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
