import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { WomanOutlined, ManOutlined, CrownOutlined } from '@ant-design/icons';
const PatientInfoCard = (props) => {
  const [bgClr, setbgClr] = useState('#407cff3f');
  const [borderClr, setborderClr] = useState('#407bff');
  const [headClr, setheadClr] = useState('#407bff');
  const amount = props.amount;
  useEffect(() => {
    if (amount <= 70 && amount > 40) {
      setbgClr('#407cff3f');
      setborderClr('#407bff');
      setheadClr('#407bff');
    } else if (amount <= 40 && amount > 20) {
      //yellow
      setbgClr('#ffe54f2a');
      setborderClr('#c5a51598');
      setheadClr('#e69225c7');
    } else if (amount <= 20 && amount >= 0) {
      //red
      setbgClr('#9c1a152a');
      setborderClr('#bd1f1498');
      setheadClr('#6b0700c7');
    } else {
      //green
      setbgClr('#159c522a');
      setborderClr('#14bd6098');
      setheadClr('#006b30c7');
    }
  }, [amount]);
  const cardStyle = {
    border: `2px solid ${borderClr}`,
    backgroundColor: bgClr,
  };
  const headStyle = {
    color: headClr,
  };
  return (
    <div className='patient-info-card' style={cardStyle}>
      <p>Bed Number {props.bedNumber}</p>
      <h3 style={headStyle}>{props.name}</h3>
      <div className='tag-container'>
        <span>
          <CrownOutlined className='icon' style={{ color: headClr }} />
          24 Yrs
        </span>
        <span>
          {props.gender == 'male' ? (
            <WomanOutlined className='icon' style={{ color: headClr }} />
          ) : (
            <ManOutlined className='icon' style={{ color: headClr }} />
          )}
          Male
        </span>
      </div>
      <h5>{props.solution}</h5>
      <Progress percent={amount} status='active' strokeColor={borderClr} />
    </div>
  );
};

export default PatientInfoCard;
