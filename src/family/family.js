import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './family.css';

import { Label, Form, Message, Button, Dropdown } from 'semantic-ui-react'

import {MessageHeader} from '../webform/registrationform/registrationform';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    border: '1px solid black'
  },
};

class FamilyScreen extends Component {

  constructor(props){
    super(props);
    this.setState({
      isMail: true,
    })
  }
  
  componentWillMount(){
    this.setState({
      isMail: true,
    });
  }

  handleMailClick = () => {
    this.setState({
      isMail: true,
      isTel: false,
      isEmail: false,
    });
  }

  handleEmailClick = () => {
    this.setState({
      isMail: false,
      isTel: false,
      isEmail: true,
    });
  }

  handleTelClick = () => {
    this.setState({
      isMail: false,
      isTel: true,
      isEmail: false,
    });
  }


  render() {
    return (
        <Message info>
          <MessageHeader
            icon="check"
            title="Consent Options"/>

          <span style={{ display: 'flex', width: '100%' }}>
            <Button style={{width: '50%'}} content="Mail" primary={this.state.isMail} onClick={() => this.handleMailClick()}/>
            <Button style={{width: '50%'}} content="Email" primary={this.state.isEmail} onClick={() => this.handleEmailClick()}/>
            <Button style={{width: '50%'}} content="Phone Number" primary={this.state.isTel} onClick={() => this.handleTelClick()}/>
          </span>
          <Form.Input
            label='Name'
            type='text'
            style={{ width: '50%'}}
            placeholder="Starbucks Nguyen"/>
        {
          this.state.isMail ?
            <Form.Input
            label='Mail'
            type='text'
            icon='truck'
            iconPosition='right'
            style={{ width: '50%'}}
            placeholder="Mailing Address" /> 
            : null
        }

        {
          this.state.isEmail ?
            <Form.Input
            label='Email'
            type='email'
            icon='mail'
            iconPosition='right'
            style={{ width: '50%'}}
            placeholder="abc@def.com" /> 
            : null
        }

        {
          this.state.isTel ?
            <Form.Input
            label='Phone Number'
            type='tel'
            icon='phone'
            iconPosition='right'
            style={{ width: '50%'}}
            placeholder="+1 (234) 567 890" /> 
            : null
        }
              
        <Dropdown text='Select Language'>
          <Dropdown.Menu>
            <Dropdown.Item text='Korean' />
            <Dropdown.Item text='Vietnamese' />
            <Dropdown.Item text='Chinese' />
            <Dropdown.Item text='English' />
          </Dropdown.Menu>
        </Dropdown>
        </Message>
    );
  }
}

export default FamilyScreen;
