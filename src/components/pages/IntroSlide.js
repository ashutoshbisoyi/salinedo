import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slideImg1 from '../../assets/slide1.svg';
import slideImg2 from '../../assets/slide2.svg';
import slideImg3 from '../../assets/slide3.png';
import { Link } from 'react-router-dom';
import BackButton from '../otherComponents/BackButton';
const IntroSlide = () => {
  return (
    <div className='intro-slide'>
      <Carousel>
        <Carousel.Item>
          <img className='slide-img' src={slideImg3} alt='Third slide' />
          <Carousel.Caption className='caption'>
            <h3>Smart Safe Secure</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='slide-img' src={slideImg1} alt='First slide' />
          <Carousel.Caption className='caption'>
            <h3>IoT Enabled Service</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='slide-img' src={slideImg2} alt='Third slide' />
          <Carousel.Caption className='caption'>
            <h3>Easy Operation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='btn-container'>
        <button className='btn2'>Learn More</button>
        <Link to='/user'>
          <button className='btn2'>Skip</button>
        </Link>
      </div>
      <BackButton />
    </div>
  );
};
export default IntroSlide;
