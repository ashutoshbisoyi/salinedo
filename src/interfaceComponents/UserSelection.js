import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import doctorImg from '../assets/doctor.png';
import patientImg from '../assets/patient.png';
import BackButton from '../otherComponents/BackButton';
import waveImg from '../assets/wave.svg';
const UserSelection = () => {
  const [doctor, setDoctor] = useState(false);
  const [patient, setPatient] = useState(false);
  const [link, setLink] = useState('/doctor/login');
  return (
    <>
      <div className='user-selection'>
        <header>
          <h1>
            <span>Hey, </span>Welcome to <span>Salinedo</span>
          </h1>
          <p>select one option from below and click on proceed</p>
        </header>
        <div className='container'>
          <h2>Who are you?</h2>
          <Container>
            <Row className='justify-content-md-center'>
              <Col>
                <div
                  className='card'
                  onClick={() => {
                    setDoctor(true);
                    setLink('/doctor/login');
                    setPatient(false);
                  }}
                  style={{
                    backgroundColor: doctor ? '#d6f7ff' : 'transparent',
                  }}
                >
                  <img src={doctorImg} alt='doctor' />
                  <h4>I'm a Doctor</h4>
                </div>
              </Col>
              <Col className='center'>
                <h4>OR</h4>
              </Col>
              <Col>
                <div
                  className='card'
                  onClick={() => {
                    setPatient(true);
                    setLink('/patient/login');
                    setDoctor(false);
                  }}
                  style={{
                    backgroundColor: patient ? '#d6f7ff' : 'transparent',
                  }}
                >
                  <img src={patientImg} alt='patient' />
                  <h4>I'm a Patient</h4>
                </div>
              </Col>
            </Row>
          </Container>

          <NavLink to={link}>
            <button className='btn'>Proced</button>
          </NavLink>
        </div>
        <BackButton />
        {/* <img src={waveImg} className='wave-img' /> */}
      </div>
    </>
  );
};
export default UserSelection;
