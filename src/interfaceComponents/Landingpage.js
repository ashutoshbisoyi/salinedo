import React from 'react';
import { NavLink } from 'react-router-dom';
import doctors from '../assets/doctors.svg';
const Landingpage = () => {
  return (
    <div>
      <div className='landing-page'>
        <div className='container'>
          <img src={doctors} alt='doctors image' />
          <h1>Salinedo</h1>
          <p>A smart saline system for new India</p>
          <NavLink to='/introduction'>
            <button className='btn'>GET STARTED</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Landingpage;
