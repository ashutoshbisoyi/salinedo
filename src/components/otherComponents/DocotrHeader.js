import { Col, Drawer, Row } from 'antd';
import React, { useState } from 'react';
import DoctorImg from '../../assets/doctordp.jpg';
import callImg from '../../assets/call.svg';
import calenderImg from '../../assets/calender.svg';
import BedImg from '../../assets/hospital-bed.svg';
import SalineImg from '../../assets/saline.svg';
import DoctorsImg from '../../assets/doctor.svg';

const DoctorHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const doctorImg = {
    backgroundImage: `url(${DoctorImg})`,
  };
  return (
    <div className='doctor-header'>
      <Row gutter={8}>
        <Col md={14}>
          <div className='doctor-info'>
            <Row>
              <Col span={4}>
                <div className='image' style={doctorImg}></div>
              </Col>
              <Col span={20}>
                <div className='content'>
                  <h4>
                    <span>Good Morning</span> doctor <span>Bisoyi</span>,
                    Welcome to <span>Salinedo</span>
                  </h4>
                  <p>
                    lorem It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </p>
                  <div>
                    <button className='btn1 active' onClick={showDrawer}>
                      See Availability Status
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4}>
          <div className='call'>
            <img src={callImg} alt='call' />
            <button className='btn1 active'>Make a Call</button>
          </div>
        </Col>
        <Col md={6}>
          <div className='calender'>
            <img src={calenderImg} alt='calebder' />
            <h4>Thursday</h4>
            <p>25th Feb 2021</p>
          </div>
        </Col>
      </Row>
      <Drawer
        title='Availability Deatils'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className='availability-card-container'>
          <div className='card'>
            <div className='card-inner'>
              <div>
                <img src={BedImg} />
                <h5>Total Beds</h5>
              </div>
            </div>
            <h3>200+</h3>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <div>
                <img src={DoctorsImg} />
                <h5>Total Doctors</h5>
              </div>
            </div>
            <h3>80+</h3>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <div>
                <img src={SalineImg} />
                <h5>Total Saline</h5>
              </div>
            </div>
            <h3>800+</h3>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default DoctorHeader;
