import React from 'react';
import HospitalImg from '../../assets/hospital.svg';
import { InfoCircleTwoTone } from '@ant-design/icons';
const MedicalInfo = () => {
  return (
    <div className='medical-info'>
      <h6>
        Medical Info <InfoCircleTwoTone className='icon' />
      </h6>
      <img src={HospitalImg} alt='hopital img' />
      <h2>All India Institute of Medical Sciences (AIIMS)</h2>
      <h5>Delhi, India</h5>
    </div>
  );
};
export default MedicalInfo;
