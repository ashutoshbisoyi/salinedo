import React, { useState } from 'react';
import { Table, Tag, Progress, Modal, Button, message } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import PatientImg from '../assets/patient.jpg';
import SalineImg from '../assets/infusion.png';
import Wave from 'react-wavify';
const PatientSalineInfo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [salineAmount, setSalineAmount] = useState(10);
  const [salineMessage, setSalineMessage] = useState('Good');
  const [waveColor, setWaveColor] = useState('#75d0ff');

  const setColor = () => {
    if (salineAmount <= 100) {
      setWaveColor('#75d0ff');
      setSalineMessage('The status is good');
    } else if (salineAmount > 100 && salineAmount <= 200) {
      setWaveColor('violet');
      setSalineMessage('The status is ok');
    } else if (salineAmount > 200 && salineAmount <= 300) {
      setWaveColor('orange');
      setSalineMessage('The status is moderate');
    } else if (salineAmount > 300 && salineAmount <= 350) {
      setWaveColor('red');
      setSalineMessage('Its critical! Change it soon');
    } else {
      setWaveColor('#75d0ff');
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
    setColor();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const callNurse = () => {
    message.success('Call sent to nurse');
  };
  return (
    <>
      <div className='patient-modal'>
        <div className='saline patient-saline'>
          <div className='msg'>
            <h1>{salineAmount}%</h1>
            <p>
              Status:
              <span style={{ color: waveColor }}>{salineMessage}</span>
            </p>
          </div>
          <div className='indications ind1'>
            <div className='indication'>
              <p>Good</p>
              <div className='hr'></div>
            </div>
            <p className='ind-msg'>(The level is good)</p>
          </div>
          <div className='indications ind2'>
            <div className='indication'>
              <p>Ok</p>
              <div className='hr'></div>
            </div>
            <p className='ind-msg'>(The level is ok, no need to change)</p>
          </div>
          <div className='indications ind3'>
            <div className='indication'>
              <p>Moderate</p>
              <div className='hr'></div>
            </div>
            <p className='ind-msg'>
              (The level is moderate, you may need to change soon)
            </p>
          </div>
          <div className='indications ind4'>
            <div className='indication'>
              <p>Danger</p>
              <div className='hr'></div>
            </div>
            <p className='ind-msg'>(The saline is about to die, change it)</p>
          </div>
          <img src={SalineImg} alt='saline' className='demo-img' />
          <Wave
            fill={waveColor}
            paused={false}
            className='wave'
            options={{
              height: salineAmount,
              amplitude: 20,
              speed: 0.25,
              points: 5,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default PatientSalineInfo;
