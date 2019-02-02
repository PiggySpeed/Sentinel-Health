import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Dropdown,
  Divider,
  Form,
  Icon,
  Message
} from 'semantic-ui-react'
import MOCK_LOGO from '../ccs_logo.png';


const MOCK_HEADER = 'The Canadian Cardiovascular Society Blood Pressure Monitoring Guidelines';
const MOCK_BODY = 'Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range.';
const MOCK_HYPERTENSION_TEXT = 'Ideally, blood pressure should be below 120/80 mmHg to maintain good health and reduce the risk of stroke, heart disease and other conditions. However, the target depends on factors like age, health conditions, and whether the reading is being taken at home or your health care professional’s office. If you have diabetes, kidney disease or other health conditions, speak to your health care professional about your readings and the treatment that is right for you. Remember, only your health care professional can tell you exactly what your target blood pressure should be.';


const styles = {
  container: {
    display: 'flex',
    width: '100%',
  }
};

const styles2 = {
  container: {
    width: '100%',
    padding: '1rem 0 0 0'
  },
  img: {
    height: 'auto',
    width: 75,
    float: 'left',
    marginLeft: '0.5rem'
  },
  header: {
    fontSize: 16,
    padding: '0 1rem',
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16,
    padding: '0 1rem'
  }
};

const styles3 = {
  description: {
    fontStyle: 'italic'
  }
};

const FormInstructions = ({ header, body, logo }) => (
  <div style={styles2.container}>
    <img src={logo} style={styles2.img}/>
    <h2 style={styles2.header}>{header}</h2>
    <p style={styles2.body}>{body}</p>
  </div>
);

const NotificationOptions = ({}) => (
  <span>
    <p style={{ color: 'black', fontWeight: 'bold' }}>Notify me by:</p>
    <Checkbox style={{ marginRight: '2rem' }} label="Email"/>
    <Checkbox style={{ marginRight: '2rem' }} label="Phone"/>
    <Checkbox style={{ marginRight: '2rem' }} label="Text"/>
  </span>
);

const MessageHeader = ({ icon, title, subtitle }) => (
  <div style={{ display: 'flex', width: '100%', alignItems: 'center', marginBottom: '1rem' }}>
    <Icon
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3rem',
        width: '4rem',
        fontSize: '2rem',
        margin: 0,
        marginRight: '1rem',
        border:'2px solid #276f86',
        borderRadius: 5 }}
      name={icon} />
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <Message.Header style={{ marginTop: '0.5rem' }}>{title}</Message.Header>
      <label>{subtitle}</label>
    </div>
  </div>
)

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      systolic: 120,
      diastolic: 80,
      heartrate: 100,
      oxygen: 75
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div style={styles.container}>
        <Form>
          <FormInstructions
            header={MOCK_HEADER}
            body={MOCK_BODY}
            logo={MOCK_LOGO}
          />

          <Divider/>

          {/* At this point, the form elements are up to the manufacturer */}
          <Form.Field>

            {/* Blood Pressure */}
            <Message info>
              <MessageHeader
                icon="heart outline"
                title="Blood Pressure"
                subtitle="Notify me when blood pressure is too high or low."
              />
              <span style={{ display: 'flex', width: '100%' }}>
                <Form.Input
                  label='Systolic'
                  type='text'
                  style={{ width: '50%'}}
                  placeholder="120"
                  onChange={e => this.onInputChange('systolic', e)}
                  value={this.state.systolic} />
                <Form.Input
                  label='Diastolic'
                  type='text'
                  style={{ width: '50%'}}
                  placeholder="80"
                  onChange={e => this.onInputChange('diastolic', e)}
                  value={this.state.diastolic} />
              </span>
              <Dropdown text='Recommended Guidelines'>
                <Dropdown.Menu>
                  <Dropdown.Item text='Canadian Diabetes Association 140/90' />
                  <Dropdown.Item text='Intensive Hypertensive Treatment 120/80' />
                  <Dropdown.Item text='Canadian Hypertensive Guidelines' />
                </Dropdown.Menu>
              </Dropdown>
              <p style={styles3.description}>{MOCK_HYPERTENSION_TEXT}</p>
            </Message>

            {/* Heart Rate */}
            <Message info>
              <MessageHeader
                icon="heartbeat"
                title="Heart Rate"
                subtitle="Notify me when heart rate is too low or high."
              />
              <Form.Input
                label='Heart Rate'
                type='text'
                style={{ width: '50%'}}
                onChange={e => this.onInputchange('heartrate', e)}
                value={this.state.heartrate} />
                {/* Maybe include image here */}
              <p style={styles3.description}>Test Text for heart rate</p>
            </Message>

            {/* Blood Oxygen Monitoring */}
            <Message info>
              <MessageHeader
                icon="comment outline"
                title="Blood Oxygen Saturation"
                subtitle="Notify me when the level of oxygen saturation in my blood is too low."
              />
              <Form.Input
                label='Blood Oxygen Saturation'
                type='text'
                style={{ width: '50%'}}
                onChange={e => this.onInputchange('oxygen', e)}
                value={this.state.oxygen} />
              {/* Maybe include image here */}
              <p style={styles3.description}>Test Text for blood oxygen</p>
            </Message>

            {/* Respiratory Rate */}
            <Message info>
              <Message.Header>Blood Pressure</Message.Header>
              <p>Did you know it's been a while?</p>
              <Form.Input label='Enter Password' type='password' />
            </Message>

          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default RegistrationForm;
