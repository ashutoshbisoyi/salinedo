import React, { useEffect, useState } from 'react';
import { Table, Tag, Progress, Modal, Button, message } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import PatientImg from '../../assets/patient.jpg';
import SalineImg from '../../assets/infusion.png';
import Wave from 'react-wavify';
import DangerAlertModal from '../Modals/DangerAlertModal';
const AllPatientTable = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [salineAmount, setSalineAmount] = useState(15);
  const [salineMessage, setSalineMessage] = useState('');
  const [waveColor, setWaveColor] = useState('#75d0ff');
  const [dangerModal, setdangerModal] = useState(false);
  const [dangerPatientList, setdangerPatientList] = useState([]);

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
      width: 80,
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
      width: 80,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Gender',
      width: 80,
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Cause',
      width: 120,
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

  let data = [];
  if (props.data) {
    data = props.data.map((value, index) => {
      return {
        key: value.bedNumber,
        bedNumber: value.bedNumber,
        name: value.patientName,
        age: 25,
        gender: value.gender,
        cause: 'Dehydration',
        type: value.salineSolution,
        amount: value.amount,
        status: value.amount,
        more: <RightCircleTwoTone onClick={showModal} />,
      };
    });
  }

  useEffect(() => {
    data.map((value, index) => {
      console.log(value.amount);
      console.log('list', dangerPatientList);
      if (value.amount < 20) {
        if (dangerPatientList.includes(value.bedNumber)) {
          console.log(value.bedNumber, 'included');
        } else {
          setdangerPatientList([...dangerPatientList, value.bedNumber]);
          console.log('including', value.bedNumber);
        }
      }
    });
  }, []);

  useEffect(() => {
    console.log('main effect', dangerPatientList);
    dangerPatientList.length >= 1
      ? setdangerModal(true)
      : setdangerModal(false);
  }, [dangerPatientList]);

  return (
    <div>
      {dangerModal && (
        <DangerAlertModal
          patients={dangerPatientList}
          closeModal={() => {
            setdangerModal(false);
            setdangerPatientList([]);
          }}
        />
      )}
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
              {/* <h1>{salineAmount}%</h1> */}
              <h1>100%</h1>
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
