import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
const BackButton = () => {
  return (
    <div className='back-btn'>
      <ArrowLeftOutlined onClick={() => window.history.back()} />
    </div>
  );
};
export default BackButton;
