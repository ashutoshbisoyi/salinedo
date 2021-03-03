import React from 'react';
import AllPatientTable from '../otherComponents/AllPatientTable';
import BackButton from '../otherComponents/BackButton';
import DoctorHeader from '../otherComponents/DocotrHeader';
import MedicalInfo from '../otherComponents/MedicalInfo';
import PatientInfo from '../otherComponents/PatientInfo';
const DoctorMainPanel = () => {
  return (
    <div className='doctor-main-panel'>
      <MedicalInfo />
      <DoctorHeader />
      <PatientInfo />
      {/* <BackButton /> */}
    </div>
  );
};
export default DoctorMainPanel;