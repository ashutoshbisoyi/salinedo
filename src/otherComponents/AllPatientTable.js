import React, { useState } from 'react';
import { Table, Tag, Progress, Modal, Button, message } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import PatientImg from '../assets/patient.jpg';
import SalineImg from '../assets/infusion.png';
import Wave from 'react-wavify';
const AllPatientTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [salineAmount, setSalineAmount] = useState(35);
  const [salineMessage, setSalineMessage] = useState('');
  const [waveColor, setWaveColor] = useState('#75d0ff');

  const setColor = () => {
    if (salineAmount <= 100) {
      setWaveColor('#75d0ff');
      setSalineMessage('The status is good');
    } else if (salineAmount > 100 && salineAmount <= 200) {
      setWaveColor('violet');
      setSalineMessage('The status is ok');
    } else if (salineAmount > 200 && salineAmount <= 300) {
      setWaveColor('orange');
      setSalineMessage('The status is moderate');
    } else if (salineAmount > 300 && salineAmount <= 350) {
      setWaveColor('red');
      setSalineMessage('Its critical! Change it soon');
    } else {
      setWaveColor('#75d0ff');
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
    setColor();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const callNurse = () => {
    message.success('Call sent to nurse');
  };
  const columns = [
    {
      title: 'Bed No.',
      width: 100,
      dataIndex: 'bedNumber',
      key: 'bedNumber',
      fixed: 'left',
    },
    {
      title: 'Full Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Gender',
      width: 100,
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Cause',
      width: 150,
      dataIndex: 'cause',
      key: 'cause',
    },
    {
      title: 'Saline Type',
      width: 150,
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount',
      width: 150,
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => {
        return <Progress percent={amount} steps={5} />;
      },
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: 100,
      render: (status) => {
        let color, text;
        if (status >= 60) {
          color = 'green';
          text = 'GOOD';
        } else if (status >= 30 && status < 60) {
          color = 'geekblue';
          text = 'MEDIUM';
        } else {
          color = 'volcano';
          text = 'DANGER';
        }
        return (
          <Tag color={color} key={status}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: 'More',
      width: 50,
      dataIndex: 'more',
      key: 'more',
    },
  ];

  // const data = [];
  // for (let i = 0; i < 100; i++) {
  //   data.push({
  //     key: i,
  //     name: `Edrward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   });
  // }
  const data = [
    {
      key: '1',
      bedNumber: 1,
      name: 'John Brown',
      age: 32,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 20,
      status: 20,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '2',
      bedNumber: 2,
      name: 'Sinthal Barik',
      age: 72,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 50,
      status: 50,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '3',
      bedNumber: 3,
      name: 'John Brown',
      age: 32,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 30,
      status: 30,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '4',
      bedNumber: 4,
      name: 'Sinthal Barik',
      age: 72,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 100,
      status: 100,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '5',
      bedNumber: 5,
      name: 'John Brown',
      age: 32,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 80,
      status: 80,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '6',
      bedNumber: 6,
      name: 'Sinthal Barik',
      age: 72,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 20,
      status: 20,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '7',
      bedNumber: 7,
      name: 'John Brown',
      age: 32,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 40,
      status: 40,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '8',
      bedNumber: 8,
      name: 'Sinthal Barik',
      age: 72,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 20,
      status: 60,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '9',
      bedNumber: 9,
      name: 'John Brown',
      age: 32,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 20,
      status: 60,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
    {
      key: '10',
      bedNumber: 10,
      name: 'Sinthal Barik',
      age: 72,
      gender: 'Male',
      cause: 'Dehydration',
      type: 'Glucose',
      amount: 20,
      status: 60,
      more: <RightCircleTwoTone onClick={showModal} />,
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
        className='table'
      />
      <Modal
        title='Patient Details'
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={callNurse}>
            Call a Nurse
          </Button>,
          <Button key='submit' type='primary' onClick={handleOk}>
            Ok
          </Button>,
        ]}
        width={1000}
      >
        <div className='patient-modal'>
          <div className='info'>
            <img src={PatientImg} alt='patient image' />
            <div>
              <h4>Harishankar Roy</h4>
              <p>Age: 38</p>
              <p>Gender: Male</p>
              <div className='imp-info'>
                <p>Cause: Dehydration</p>
                <p>Solution Type: Saline</p>
              </div>
            </div>
          </div>
          <div className='saline'>
            <div className='msg'>
              <h1>{salineAmount}%</h1>
              <p>
                Status:
                <span style={{ color: waveColor }}>{salineMessage}</span>
              </p>
            </div>
            <div className='indications ind1'>
              <div className='indication'>
                <p>Good</p>
                <div className='hr'></div>
              </div>
              <p className='ind-msg'>(The level is good)</p>
            </div>
            <div className='indications ind2'>
              <div className='indication'>
                <p>Ok</p>
                <div className='hr'></div>
              </div>
              <p className='ind-msg'>(The level is ok, no need to change)</p>
            </div>
            <div className='indications ind3'>
              <div className='indication'>
                <p>Moderate</p>
                <div className='hr'></div>
              </div>
              <p className='ind-msg'>
                (The level is moderate, you may need to change soon)
              </p>
            </div>
            <div className='indications ind4'>
              <div className='indication'>
                <p>Danger</p>
                <div className='hr'></div>
              </div>
              <p className='ind-msg'>(The saline is about to die, change it)</p>
            </div>
            <img src={SalineImg} alt='saline' className='demo-img' />
            <Wave
              fill={waveColor}
              paused={false}
              className='wave'
              options={{
                height: salineAmount,
                amplitude: 20,
                speed: 0.25,
                points: 5,
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AllPatientTable;
