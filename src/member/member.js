import React, { Component } from 'react';
import './member.css';
import { Message, Checkbox, Form, Label } from 'semantic-ui-react';
import {MessageHeader} from '../webform/registrationform/registrationform';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    border: '1px solid black'
  }
};

class MemberScreen extends Component {

  constructor (props){
    super(props);
  }

  componentWillMount (){
    this.setState({
      isByEmail: false,
      isByPhone: false,
      isByPush: false,
    });
  }

  notifyByPhoneChanged = () => {
    this.setState({
      isByPhone : !this.state.isByPhone,
    });
  }

  notifyByEmailChanged = () => {
    this.setState({
      isByEmail : !this.state.isByEmail,
    });
  }

  notifyByPushChanged = () => {

  }

  render() {
    return (
      <Message info>
        <MessageHeader
            icon="alarm outline"
            title="Notification Options"
            subtitle="I'd like to receive notification by: " />
        <Checkbox toggle label="Phone" value="Phone" checked={this.state.isByPhone}
          onChange={() => this.notifyByPhoneChanged()}/>
        {
          this.state.isByPhone ?
            <Form.Input
            type='tel'
            style={{ width: '50%'}}
            icon='phone'
            iconPosition='right'
            placeholder="+1 (234) 567 890"/>
            : null
        }
        <br/>
        <Checkbox toggle label="Email" value="Email" checked={this.state.isByEmail}
          onChange={() => this.notifyByEmailChanged()}
          icon='mail'/>
        {
          this.state.isByEmail ?
            <Form.Input
            type='email'
            icon='mail'
            iconPosition='right'
            style={{ width: '50%'}}
            placeholder="abc@def.com"/>
            : null
        }
        <br/>
        {
          this.state.isByPush ?
          <Checkbox toggle label="Push Notifications" value="notification" checked={this.state.isByEmail}
            onChange={() => this.notifyByPushChanged()}/>
              : null
        }
      </Message>
    );
  }
}

export default MemberScreen;
