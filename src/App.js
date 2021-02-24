import React from 'react';
import './sass/main.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Landingpage from './components/pages/Landingpage';
import IntroSlide from './components/pages/IntroSlide';
import ErrorPage from './components/pages/ErrorPage';
import UserSelection from './components/pages/UserSelection';
import NavBar from './components/otherComponents/NavBar';
import DoctorLoginPanel from './components/pages/DoctorLoginPanel';
import PatientLoginPanel from './components/pages/PatientLoginPanel';
import DoctorMainPanel from './components/pages/DoctorMainPanel';
import PatientMainPanel from './components/pages/PatientMainPanel';

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/salinedo' component={Landingpage} />
          <Route exact path='/introduction' component={IntroSlide} />
          <Route exact path='/user' component={UserSelection} />
          <Route exact path='/doctor/login' component={DoctorLoginPanel} />
          <Route exact path='/doctor/mainpanel' component={DoctorMainPanel} />
          <Route exact path='/patient/login' component={PatientLoginPanel} />
          <Route exact path='/patient/mainpanel' component={PatientMainPanel} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
