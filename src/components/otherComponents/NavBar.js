import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import Clock from '../otherComponents/Clock';
import { ClockCircleTwoTone } from '@ant-design/icons';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <Navbar className='my-navbar'>
        <Navbar.Brand>
          <img
            alt='salinedo'
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          Salinedo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <ClockCircleTwoTone />
          <Navbar.Text>
            <Clock />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
