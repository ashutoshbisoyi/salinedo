import React from 'react';
import HospitalImg from '../assets/hospital.svg';
import { InfoCircleTwoTone } from '@ant-design/icons';
const MedicalInfoPatient = () => {
  return (
    <div className='medical-info2'>
      <h3>Medical Info</h3>
      <hr />
      <div className='img-container'>
        <div>
          <h2>All India Institute of Medical Sciences (AIIMS)</h2>
          <h5>Delhi,India</h5>
        </div>
      </div>
      <div>
        <p>
          lorem It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover
        </p>
      </div>
    </div>
  );
};
export default MedicalInfoPatient;
