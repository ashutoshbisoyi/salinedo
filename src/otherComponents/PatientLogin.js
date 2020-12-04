import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, GroupOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const PatientLogin = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name='bednumber'
        rules={[{ required: true, message: 'Please input bed number!' }]}
      >
        <Input
          prefix={<GroupOutlined className='site-form-item-icon' />}
          placeholder='Bed Number'
        />
      </Form.Item>
      <Form.Item
        name='patientname'
        rules={[{ required: true, message: 'Please input Patient name!' }]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Patient name'
        />
      </Form.Item>
      <Form.Item>
        <center>
          <NavLink to='/patient/mainpanel'>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              See Details
            </Button>
          </NavLink>
        </center>
      </Form.Item>
    </Form>
  );
};
export default PatientLogin;
