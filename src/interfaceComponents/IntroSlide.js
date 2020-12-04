import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slideImg from '../assets/doctors.svg';
import slideImg1 from '../assets/slide1.png';
import slideImg3 from '../assets/slide3.png';
import { NavLink } from 'react-router-dom';
import BackButton from '../otherComponents/BackButton';
const IntroSlide = () => {
  return (
    <div className='intro-slide'>
      <Carousel>
        <Carousel.Item>
          <img className='slide-img' src={slideImg1} alt='First slide' />
          <Carousel.Caption className='caption'>
            <h3>Reliable Service</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='slide-img' src={slideImg} alt='Third slide' />
          <Carousel.Caption className='caption'>
            <h3>Complete Protection</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='slide-img' src={slideImg3} alt='Third slide' />
          <Carousel.Caption className='caption'>
            <h3>Smart Safe Secure</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <NavLink to='/user'>
        <center>
          <button className='btn'>Learn More</button>
          <button className='btn'>Skip</button>
        </center>
      </NavLink>
      <BackButton />
    </div>
  );
};
export default IntroSlide;
