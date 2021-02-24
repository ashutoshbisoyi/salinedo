import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import doctorImg from '../../assets/doctor.png';
import patientImg from '../../assets/patient.png';
import BackButton from '../otherComponents/BackButton';
import { message } from 'antd';
const UserSelection = () => {
  const [doctor, setDoctor] = useState(false);
  const [patient, setPatient] = useState(false);
  const history = useHistory();
  const active = {
    backgroundColor: '#74c4e985',
    border: '2px solid #3ba2d1',
  };
  const handleClick = () => {
    if (doctor === true) {
      history.push('/doctor/login');
    } else if (patient === true) {
      history.push('/patient/login');
    } else {
      message.warning('Select a role first');
    }
  };
  return (
    <>
      <div className='user-selection'>
        <div className='top'>
          <header>
            <h1>
              <span>Hey, </span>Welcome to <span>Salinedo</span>
            </h1>
            <p>select one option from below and click on proceed</p>
          </header>
        </div>
        <div className='page-content'>
          <div className='container'>
            <h2>Who are you?</h2>
            <Container>
              <Row className='justify-content-md-center'>
                <Col>
                  <div
                    onClick={() => {
                      setDoctor(true);
                      setPatient(false);
                    }}
                    className={doctor ? 'card active' : 'card'}
                  >
                    <img src={doctorImg} alt='doctor' />
                    <h4>I'm a Doctor</h4>
                  </div>
                </Col>
                <Col className='center'>
                  <div className='or'>
                    <h4>OR</h4>
                  </div>
                </Col>
                <Col>
                  <div
                    onClick={() => {
                      setPatient(true);
                      setDoctor(false);
                    }}
                    className={patient ? 'card active' : 'card'}
                  >
                    <img src={patientImg} alt='patient' />
                    <h4>I'm a Patient</h4>
                  </div>
                </Col>
              </Row>
            </Container>
            {doctor == true || patient == true ? (
              <p className='tip'>
                ( i.e. You have selected
                <strong>{doctor ? ' Doctor' : ' Patient'}</strong> )
              </p>
            ) : (
              ''
            )}
            <div className='btn-container'>
              <button className='btn1 active' onClick={handleClick}>
                Proced
              </button>
            </div>
          </div>
          <BackButton />
        </div>
      </div>
    </>
  );
};
export default UserSelection;
