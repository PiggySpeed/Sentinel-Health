import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './family.css';

import { Label, Form, Message, MessageHeader, Button, Dropdown } from 'semantic-ui-react'

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
    // this.handleMailClick();
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
    console.log('this.isMail:::' + this.state.isMail);
  }

  handleEmailClick = () => {
    this.setState({
      isMail: false,
      isTel: false,
      isEmail: true,
    });
    console.log('this.isEmail:::' + this.state.isEmail);
  }

  handleTelClick = () => {
    this.setState({
      isMail: false,
      isTel: true,
      isEmail: false,
    });
    console.log('this.isTel:::' + this.state.isTel);
  }


  render() {
    return (
        <Message info>
          <MessageHeader
            icon="comment outline"
            title="Consent Information" />

          <span style={{ display: 'flex', width: '100%' }}>
            <Button style={{width: '50%'}} content="Mail" primary={this.state.isMail} onClick={() => this.handleMailClick()}/>
            <Button style={{width: '50%'}} content="Email" primary={this.state.isEmail} onClick={() => this.handleEmailClick()}/>
            <Button style={{width: '50%'}} content="Tel" primary={this.state.isTel} onClick={() => this.handleTelClick()}/>
          </span>
          <Form.Input
            label='Name'
            type='text'
            style={{ width: '50%'}}
            placeholder="This is some name"/>
        {
          this.state.isMail ?
            <Form.Input
            label='Mail'
            type='text'
            style={{ width: '50%'}}
            placeholder="Mail Address" /> 
            : null
        }

        {
          this.state.isEmail ?
            <Form.Input
            label='Email'
            type='email'
            style={{ width: '50%'}}
            placeholder="Email Address" /> 
            : null
        }

        {
          this.state.isTel ?
            <Form.Input
            label='Mail'
            type='tel'
            style={{ width: '50%'}}
            placeholder="Tel No." /> 
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
