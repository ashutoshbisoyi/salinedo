import React, { useEffect, useState } from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import animation from '../../assets/animation/alert.png';
import music from '../../assets/music/siren-slow.mp3';
import ReactAudioPlayer from 'react-audio-player';
const DangerAlertModal = (props) => {
  const [ringSiren, setringSiren] = useState(true);
  // const [audio] = useState(new Audio(music));

  // useEffect(() => {
  //   ringSiren ? audio.play() : audio.pause();
  // }, [ringSiren, audio]);

  console.log(props.patients);

  return (
    <div className='modal-container'>
      {ringSiren && <ReactAudioPlayer src={music} autoPlay />}
      <div className='general-modal danger-alert-modal'>
        <h3>
          Add a New Blog
          <CloseSquareOutlined
            className='close-btn'
            onClick={props.closeModal}
          />
        </h3>
        <div className='modal-content'>
          <img src={animation} alt='animation' />
          <h2>!!!Alert!!!</h2>
          <h4>
            Bed Number
            {props.patients.map((value, index) => {
              return ' ' + value + ' ';
            })}
            is in Danger
          </h4>
          <div className='btn-container'>
            <button onClick={() => setringSiren(!ringSiren)}>
              Close Siren
            </button>
            <button>Notify Nurse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DangerAlertModal;
