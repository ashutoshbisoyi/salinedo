import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../../assets/animation/doctor.gif';
import { DoubleRightOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
const Landingpage = () => {
  return (
    <div className='landing-page'>
      <div className='container'>
        <Row>
          <Col md={12}>
            <div className='content'>
              <header>
                <h6>A Innovative medical appraoch</h6>
                <h1>
                  <span>IoT</span> enabled <span>Smart Saline System</span> and
                  <span> Managment</span>
                </h1>
                <div className='btn-wrapper'>
                  <Link to='/user'>
                    <button>
                      Get Started <DoubleRightOutlined className='icon' />
                    </button>
                  </Link>
                  <Link to='/user'>
                    <button className='play'>
                      <CaretRightOutlined />
                    </button>
                  </Link>
                </div>
              </header>
            </div>
          </Col>
          <Col md={12}>
            <div className='image-container'>
              <img src={animation} alt='doctor' />
            </div>
          </Col>
        </Row>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 250'
        className='svg'
      >
        <path
          fill='#407bff'
          fill-opacity='1'
          d='M0,128L60,144C120,160,240,192,360,213.3C480,235,600,245,720,218.7C840,192,960,128,1080,122.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </svg>
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className='bolb1'
      >
        <path
          fill='#BAE6FF'
          d='M38.2,-32.8C50.1,-15.6,60.7,0.4,58,13.6C55.3,26.9,39.2,37.5,21.1,47.8C2.9,58.1,-17.4,68.1,-36.1,63.5C-54.8,58.9,-71.9,39.6,-75.6,18.7C-79.2,-2.2,-69.3,-24.8,-54.5,-42.8C-39.6,-60.7,-19.8,-74,-3.3,-71.4C13.2,-68.7,26.3,-50.1,38.2,-32.8Z'
          transform='translate(100 100)'
        />
      </svg>
    </div>
  );
};
export default Landingpage;
