import React from 'react';
import AllPatientTable from '../otherComponents/AllPatientTable';
import BackButton from '../otherComponents/BackButton';
import DoctorHeader from '../otherComponents/DocotrHeader';
import MedicalInfo from '../otherComponents/MedicalInfo';
import MedicalInfoPatient from '../otherComponents/MedicalInfoPatient';
import PatientHeader from '../otherComponents/PatientHeader';
import PatientSalineInfo from '../otherComponents/PatientSalineInfo';
const PatientMainPanel = () => {
  return (
    <>
      <MedicalInfoPatient />
      <PatientHeader />
      <PatientSalineInfo />
      <BackButton />
    </>
  );
};
export default PatientMainPanel;
