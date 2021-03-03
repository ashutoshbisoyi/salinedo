import React, { useEffect, useState } from 'react';
import { Col, Row, notification } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import AllPatientTable from './AllPatientTable';
import PatientInfoCard from './PatientInfoCard';
import slowSiren from '../../assets/music/siren-slow.mp3';
import midSiren from '../../assets/music/siren-medium.mp3';
import fastSiren from '../../assets/music/siren-fast.mp3';
import ReactAudioPlayer from 'react-audio-player';

const PatientInfo = () => {
  const [spinner, setspinner] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [tableView, setTableView] = useState(false);
  const [refresh, setRefresh] = useState(1);
  const [sirenType, setSirenType] = useState();
  const [audio] = useState(new Audio(sirenType));
  //
  const [minorList, setMinorList] = useState([]);
  const [dangerList, setDangerList] = useState([]);
  const [seriousList, setSeriousList] = useState([]);
  //
  const patientData = [
    {
      bedNumber: 1,
      patientName: 'Sankar Sethi',
      gender: 'male',
      salineSolution: 'Glucose',
      amount: 10,
    },
    {
      bedNumber: 2,
      patientName: 'Amarjeet Sahoo',
      gender: 'male',
      salineSolution: 'Solution Name',
      amount: 50,
    },
    {
      bedNumber: 3,
      patientName: 'Sankar Sethi',
      gender: 'male',
      salineSolution: 'Lactated Ringers',
      amount: 90,
    },
    {
      bedNumber: 4,
      patientName: 'Plabin Bisi',
      gender: 'female',
      salineSolution: 'Blood',
      amount: 35,
    },
    {
      bedNumber: 5,
      patientName: 'Debasish Jena',
      gender: 'male',
      salineSolution: 'Water',
      amount: 22,
    },
    {
      bedNumber: 6,
      patientName: 'Uday Kiran',
      gender: 'male',
      salineSolution: 'Direction Acid',
      amount: 32,
    },
    {
      bedNumber: 7,
      patientName: 'Lipsa Nayak',
      gender: 'female',
      salineSolution: 'Singitic Fluid',
      amount: 28,
    },
    {
      bedNumber: 8,
      patientName: 'Priyanshu Nayak',
      gender: 'male',
      salineSolution: 'Glucose',
      amount: 10,
    },
    {
      bedNumber: 9,
      patientName: 'Prerana Behera',
      gender: 'female',
      salineSolution: 'Readycid',
      amount: 40,
    },
    {
      bedNumber: 10,
      patientName: 'Baibhab Panigrahi',
      gender: 'male',
      salineSolution: 'Upscatic Solution',
      amount: 95,
    },
  ];

  const openNotification = (type, list) => {
    const args = {
      message: `${type} Patient List`,
      description: `Bed Number ${list}`,
      duration: 0,
    };
    notification.open(args);
  };

  useEffect(() => {
    notification.close();
    patientData.map((value, index) => {
      if (value.amount <= 25 && value.amount > 20) {
        if (minorList.includes(value.bedNumber)) {
          console.log(value.bedNumber, 'included in minor');
        } else {
          setMinorList([...minorList, value.bedNumber]);
        }
      } else if (value.amount <= 20 && value.amount > 15) {
        if (dangerList.includes(value.bedNumber)) {
          console.log(value.bedNumber, 'included in danger');
        } else {
          setDangerList([...dangerList, value.bedNumber]);
        }
      } else if (value.amount <= 15) {
        if (seriousList.includes(value.bedNumber)) {
          console.log(value.bedNumber, 'included in danger');
        } else {
          setSeriousList([...seriousList, value.bedNumber]);
        }
      }
      return console.log('end');
    });

    const minorLength = minorList.length;
    const dangerLength = dangerList.length;
    const seriousLength = seriousList.length;

    minorLength > 1 && openNotification('Minor', minorList);
    dangerLength > 1 && openNotification('Danger', dangerList);
    seriousLength > 1 && openNotification('Serios', seriousList);

    if (seriousLength >= dangerLength && seriousLength >= minorLength) {
      setSirenType(fastSiren);
    } else if (seriousLength === 0 && dangerLength >= minorLength) {
      setSirenType(midSiren);
    } else if (seriousLength === 0 && dangerLength === 0 && minorLength > 1) {
      setSirenType(slowSiren);
    }
  }, [minorList, dangerList, seriousList, refresh, patientData, sirenType]);

  return (
    <div className='patient-info'>
      {/* {sirenType && <ReactAudioPlayer src={sirenType} autoPlay loop controls />} */}
      <header>
        <div className='content'>
          <h3 className='heading'>All Patient Info</h3>
          <p className='desc'>Information of all the beds are shown below</p>
        </div>

        <div className='btn-wrapper'>
          <button
            className={gridView ? 'bt1 active' : 'bt1'}
            onClick={() => {
              setGridView(true);
              setTableView(false);
            }}
          >
            Grid View
          </button>
          <button
            className={tableView ? 'bt2 active' : 'bt2'}
            onClick={() => {
              setTableView(true);
              setGridView(false);
            }}
          >
            Table View
          </button>
        </div>
        <div className='refresh'>
          <button
            onClick={() => {
              setspinner(!spinner);
              setRefresh(refresh + 1);
            }}
          >
            Refresh <SyncOutlined className='icon' spin={spinner} />
          </button>
          <p>Last refreshed at 10:10 a.m</p>
        </div>
      </header>
      {gridView && (
        <Row gutter={8}>
          {patientData.map((value, index) => {
            return (
              <Col md={6} key={index}>
                <PatientInfoCard
                  bedNumber={value.bedNumber}
                  name={value.patientName}
                  solution={value.salineSolution}
                  amount={value.amount}
                />
              </Col>
            );
          })}
        </Row>
      )}
      {tableView && <AllPatientTable data={patientData} />}
    </div>
  );
};

export default PatientInfo;
