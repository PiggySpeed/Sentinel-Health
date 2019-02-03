import React, { Component } from 'react';

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
    const {language} = this.props;
    console.log(language);
    return (
        <Message info>
          <MessageHeader
            icon="check"
            title={(language == '0') ? "Consent Options" : "동의 옵션"}/>

          <span style={{ display: 'flex', width: '100%' }}>
            <Button style={{width: '50%'}} content={(language == '0') ? "Mail" : "우편"} primary={this.state.isMail} onClick={() => this.handleMailClick()}/>
            <Button style={{width: '50%'}} content={(language== '0') ? "Email" : "이메일"} primary={this.state.isEmail} onClick={() => this.handleEmailClick()}/>
            <Button style={{width: '50%'}} content={(language == '0') ? "Phone Number" : "전화 번호"} primary={this.state.isTel} onClick={() => this.handleTelClick()}/>
          </span>
          <Form.TextArea
            label={(language == '0') ? 'Message' : '메시지'}
            type='text'
            style={{ width: '100%'}}
            value={(language == '0') ? 'Hi Dad, Can I have your consent to use your data to monitor your health' : '안녕 아빠, 당신의 건강을 모니터하기 위해 데이터를 사용하는 것에 동의 할 수 있습니까?'}/>
        {
          this.state.isMail ?
            <Form.Input
            label={(language == '0') ? 'Mail' : '우편'}
            type='text'
            icon='truck'
            iconPosition='right'
            style={{ width: '50%'}}
            placeholder={(language=='0') ? "Mailing Address" : "우편 주소"} />
            : null
        }

        {
          this.state.isEmail ?
            <Form.Input
            label={(language == '0') ? 'Email' : '이메일'}
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
            label={(language == '0') ? 'Phone Number' : '전화 번호'}
            type='tel'
            icon='phone'
            iconPosition='right'
            style={{ width: '50%'}}
            placeholder="+1 (234) 567 890" />
            : null
        }
        </Message>
    );
  }
}

FamilyScreen.propTypes = {
  language: String,
}

export default FamilyScreen;
