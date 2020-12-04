import React from 'react';
import { NavLink } from 'react-router-dom';
import { Result, Button } from 'antd';
const ErrorPage = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <NavLink to='/'>
          <Button type='primary'>Back Home</Button>
        </NavLink>
      }
    />
  );
};
export default ErrorPage;
