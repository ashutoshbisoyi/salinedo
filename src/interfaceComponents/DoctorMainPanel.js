import React from 'react';
import AllPatientTable from '../otherComponents/AllPatientTable';
import BackButton from '../otherComponents/BackButton';
import DoctorHeader from '../otherComponents/DocotrHeader';
import MedicalInfo from '../otherComponents/MedicalInfo';
const DoctorMainPanel = () => {
  return (
    <>
      <MedicalInfo />
      <DoctorHeader />
      <AllPatientTable />
      <BackButton />
    </>
  );
};
export default DoctorMainPanel;
