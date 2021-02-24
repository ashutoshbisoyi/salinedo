import React from 'react';
import PatientImg from '../../assets/patient.png';
import BackButton from '../otherComponents/BackButton';
import PatientLogin from '../otherComponents/PatientLogin';
const PatientLoginPanel = () => {
  return (
    <>
      <div className='doctor-panel'>
        <header>
          <h1>
            <span>Hey, </span>there Welcome
          </h1>
          <p>please enter a valid details to see details</p>
        </header>
        <div className='login-card'>
          <figure>
            <img src={PatientImg} alt='doctor image' />
          </figure>
          <PatientLogin />
        </div>
        <BackButton />
      </div>
    </>
  );
};
export default PatientLoginPanel;
