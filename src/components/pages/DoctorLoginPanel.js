import React from 'react';
import DoctorImg from '../../assets/doctor.png';
import stethoImg from '../../assets/stethoscope.png';
import BackButton from '../otherComponents/BackButton';
import DoctorLogin from '../otherComponents/DoctorLogin';
const DoctorLoginPanel = () => {
  return (
    <>
      <div className='doctor-login-panel'>
        <div>
          <header>
            <h1>
              <span>Hey, </span>Welcome Doctor
              <img src={stethoImg} alt='stetho' />
            </h1>
            <p>please fill the form and login</p>
          </header>
          <div className='login-card'>
            <figure>
              <img src={DoctorImg} alt='doctor image' />
            </figure>
            <DoctorLogin />
          </div>
        </div>
        <BackButton />
      </div>
    </>
  );
};
export default DoctorLoginPanel;
