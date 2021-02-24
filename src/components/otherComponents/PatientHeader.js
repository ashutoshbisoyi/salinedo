import {
  InfoCircleOutlined,
  PhoneOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
const PatientHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='patient-header'>
      <figure>{/* <img src={PatientImg} alt='Docotr Image' /> */}</figure>
      <h4>Hey Rashmika!</h4>
      <h5>
        We wish for your speedy recovery. Get well soon{' '}
        <SmileOutlined className='icon' />
      </h5>
      <div className='imp-info'>
        <p>Your Saline-Type: Glucose</p>
      </div>
      <div className='btn-group'>
        <button className='btn'>
          <InfoCircleOutlined className='icon' />
          Know Your Doctor
        </button>
        <button className='btn'>
          <PhoneOutlined className='icon' />
          Call A Nurse
        </button>
      </div>
    </div>
  );
};
export default PatientHeader;
