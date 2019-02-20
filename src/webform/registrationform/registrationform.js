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
import FamilyScreen from '../../family/family';
import MemberScreen from '../../member/member';


let MOCK_HEADER = 'The Canadian Cardiovascular Society Blood Pressure Monitoring Guidelines';
let MOCK_BODY = 'Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range.';
let MOCK_HYPERTENSION_TEXT = 'Ideally, blood pressure should be below 120/80 mmHg to maintain good health and reduce the risk of stroke, heart disease and other conditions. However, the target depends on factors like age, health conditions, and whether the reading is being taken at home or your health care professional’s office. If you have diabetes, kidney disease or other health conditions, speak to your health care professional about your readings and the treatment that is right for you. Remember, only your health care professional can tell you exactly what your target blood pressure should be.';


const styles = {
  container: {
    display: 'flex',
    width: '100%',
    flex: 'none',
    paddingBottom: '200px'
  },
  innerContainer: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%'
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

export const MessageHeader = ({ icon, title, subtitle, borderColor }) => (
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
      <Message.Header style={{ marginTop: '0.5rem', color: '#0e566c' }}>{title}</Message.Header>
      <label style={{color: '#0e566c'}}>{subtitle}</label>
    </div>
  </div>
);

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    const {language} = this.props;
    this.setState({
      language: language,
    });

    this.state = {
      systolic: 120,
      diastolic: 80,
      heartrate: 100,
      oxygen: 75,
      respiratory: 20,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const {language} = this.props;
    console.log(language);
    if (language == '1'){
      console.log('is korean');
      MOCK_HEADER = '캐나다 심혈관 학회 혈압 모니터링 지침';
      MOCK_BODY = '혈압이 범위를 벗어 났을 때 알림 장치를 등록하십시오. 혈압이 범위를 벗어 났을 때 알림 장치를 등록하십시오. 혈압이 범위를 벗어 났을 때 알림 장치를 등록하십시오. 혈압이 범위를 벗어 났을 때 알림 장치를 등록하십시오. 혈압이 범위를 벗어 났을 때 알림 장치를 등록하십시오.';
      MOCK_HYPERTENSION_TEXT = '이상적으로는, 건강을 유지하고 뇌졸중, 심장 질환 및 기타 질병의 위험을 줄이려면 혈압이 120/80 mmHg 미만이어야합니다. 그러나 목표는 연령, 건강 상태, 집이나 건강 관리 전문가 사무실에서 책을 읽는지 여부 등의 요소에 따라 다릅니다. 귀하가 당뇨병, 신장 질환 또는 기타 건강 상태에 처한 경우 귀하의 건강 관리 전문가에게 귀하의 판독 및 귀하에게 적합한 대우에 관해 상담하십시오. 건강 관리 전문가만이 목표 혈압이 정확히 무엇인지 말해 줄 수 있습니다.';
    } else {
      MOCK_HEADER = 'The Canadian Cardiovascular Society Blood Pressure Monitoring Guidelines';
      MOCK_BODY = 'Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range. Register your device for notifications when blood pressure goes out of range.';
      MOCK_HYPERTENSION_TEXT = 'Ideally, blood pressure should be below 120/80 mmHg to maintain good health and reduce the risk of stroke, heart disease and other conditions. However, the target depends on factors like age, health conditions, and whether the reading is being taken at home or your health care professional’s office. If you have diabetes, kidney disease or other health conditions, speak to your health care professional about your readings and the treatment that is right for you. Remember, only your health care professional can tell you exactly what your target blood pressure should be.';
    }

    return (
      <div style={styles.container}>
      <div style={styles.innerContainer}>
        <Form>
          <FormInstructions
            header={MOCK_HEADER}
            body={MOCK_BODY}
            logo={MOCK_LOGO}
          />

          <Divider/>

          {/* At this point, the form elements are up to the manufacturer */}
          <div style={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'column', padding: '0 1rem'}}>

            {/* Blood Pressure */}
            <Message info>
              <MessageHeader
                icon="heart outline"
                title={(language == '0') ? "Blood Pressure" : '혈압'}
                subtitle={(language == '0') ? "Notify me when blood pressure is too high or low." : '혈압이 너무 높거나 낮을 때 알려주십시오.'}
              />
              <span style={{ display: 'flex', width: '100%' }}>
                <Form.Input
                  label={(language == '0') ? 'Systolic' : '수축기'}
                  type='text'
                  style={{ width: '50%'}}
                  placeholder="120"
                  onChange={e => this.onInputChange('systolic', e)}
                  value={this.state.systolic} />
                <Form.Input
                  label={(language == '0') ? 'Diastolic' : '확장기'}
                  type='text'
                  style={{ width: '50%'}}
                  placeholder="80"
                  onChange={e => this.onInputChange('diastolic', e)}
                  value={this.state.diastolic} />
              </span>
              <Dropdown text={(language == '0') ? 'Recommended Guidelines' : '권장 지침'}>
                <Dropdown.Menu>
                  <Dropdown.Item text={(language=='0') ? 'Canadian Diabetes Association 140/90' : '캐나다 당뇨병 협회 140/90'} />
                  <Dropdown.Item text={(language == '0') ? 'Intensive Hypertensive Treatment 120/80' : '집중 고혈압 치료 120/80'} />
                  <Dropdown.Item text={(language == '0') ? 'Canadian Hypertensive Guidelines' : '캐나다 고혈압 가이드 라인'}/>
                </Dropdown.Menu>
              </Dropdown>
              <p style={styles3.description}>{MOCK_HYPERTENSION_TEXT}</p>
            </Message>

            {/* Heart Rate */}
            <Message info>
              <MessageHeader
                icon="heartbeat"
                title={(language == '0') ? "Heart Rate" : "심장 박동수"}
                subtitle={(language == '0') ? "Notify me when heart rate is too low or high." : "심장 박동이 너무 낮거나 높을 때 알림."}
              />
              <Form.Input
                label={(language == '0') ? 'Heart Rate' : '심박수'}
                type='text'
                style={{ width: '50%'}}
                onChange={e => this.onInputChange('heartrate', e)}
                value={this.state.heartrate} />
                {/* Maybe include image here */}
              <p style={styles3.description}>{(language == '0') ? 'Test Text for heart rate' : '심박수에 대한 텍스트 테스트'}</p>
            </Message>

            {/* Blood Oxygen Monitoring */}
            <Message info>
              <MessageHeader
                icon="comment outline"
                title={(language == '0') ? "Blood Oxygen Saturation" : "혈액 산소 포화 상태"}
                subtitle={(language == '0') ? "Notify me when the level of oxygen saturation in my blood is too low." : "내 피의 산소 포화도가 너무 낮을 때 알려 줘."}
              />
              <Form.Input
                label={(language == '0') ? 'Blood Oxygen Saturation': '혈액 산소 포화 상태'}
                type='text'
                style={{ width: '50%'}}
                onChange={e => this.onInputChange('oxygen', e)}
                value={this.state.oxygen} />
              {/* Maybe include image here */}
              <p style={styles3.description}>{(language == '0') ? 'Test Text for blood oxygen' : '혈액 산소 테스트 텍스트'}</p>
            </Message>

            {/* Respiratory Rate */}
            <Message info>
              <MessageHeader
                icon="cloud"
                title={(language=='0') ? "Respiratory Rate" : "호흡"}
                subtitle={(language == '0') ? "Notify me when the respiratory rate is too low or high." : "호흡률이 너무 낮거나 높을 때 알림."}
              />
              <Form.Input
                label={(language == '0') ? 'Respiratory Rate' : '호흡'}
                type='text'
                style={{ width: '50%'}}
                onChange={e => this.onInputChange('respiratory', e)}
                value={this.state.respiratory} />
                <p style={styles3.description}>{(language == '0') ? 'Test Text for respiratory rate' : '호흡률 테스트 텍스트'}</p>
            </Message>
            <FamilyScreen language={language}/>
            <MemberScreen language={language}/>
            <Button.Group>
              <Button>{(language == '0') ? 'Complete Later' : '나중에 완료'}</Button>
              <Button.Or />
              <Button primary>{(language == '0') ? 'Submit' : '제출'}</Button>
            </Button.Group>
          </div>
        </Form>
        </div>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  language: String,
}

export default RegistrationForm;
