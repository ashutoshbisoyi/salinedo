import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import Clock from '../otherComponents/Clock';
import { ClockCircleTwoTone } from '@ant-design/icons';

const NavBar = () => {
  return (
    <Navbar className='my-navbar'>
      <Navbar.Brand>
        <img
          alt=''
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />
        Salinedo
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        {/* <Navbar.Text>
          Signed in as: <a href='#login'>Mark Otto</a>
        </Navbar.Text> */}
        <ClockCircleTwoTone />
        <Navbar.Text>
          <Clock />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
