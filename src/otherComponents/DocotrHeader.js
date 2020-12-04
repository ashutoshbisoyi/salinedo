import { Drawer } from 'antd';
import React, { useState } from 'react';
import DoctorImg from '../assets/doctordp.jpg';
import BedImg from '../assets/hospital-bed.svg';
import SalineImg from '../assets/saline.svg';
import DoctorsImg from '../assets/doctor.svg';
const DoctorHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='doctor-header'>
      <figure>
        <img src={DoctorImg} alt='Docotr Image' />
      </figure>
      <div>
        <h4>
          Hello doctor <span>Ojha</span>, Welcome to <span>Salinedo</span>
        </h4>
        <p>
          lorem It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover
        </p>
        <div>
          <button className='btn' onClick={showDrawer}>
            See Availability Status
          </button>
        </div>
      </div>
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
