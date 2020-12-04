import React from 'react';
import DoctorImg from '../assets/doctor.png';
import BackButton from '../otherComponents/BackButton';
import DoctorLogin from '../otherComponents/DoctorLogin';
const DoctorLoginPanel = () => {
  return (
    <>
      <div className='doctor-panel'>
        <header>
          <h1>
            <span>Hey, </span>Welcome Doctor
          </h1>
          <p>please fill the form and login</p>
        </header>
        <div className='login-card'>
          <figure>
            <img src={DoctorImg} alt='doctor image' />
          </figure>
          <DoctorLogin />
        </div>
        <BackButton />
      </div>
    </>
  );
};
export default DoctorLoginPanel;
