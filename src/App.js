import React from 'react';
import './sass/main.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Landingpage from './interfaceComponents/Landingpage';
import IntroSlide from './interfaceComponents/IntroSlide';
import ErrorPage from './interfaceComponents/ErrorPage';
import UserSelection from './interfaceComponents/UserSelection';
import NavBar from './interfaceComponents/NavBar';
import DoctorLoginPanel from './interfaceComponents/DoctorLoginPanel';
import PatientLoginPanel from './interfaceComponents/PatientLoginPanel';
import DoctorMainPanel from './interfaceComponents/DoctorMainPanel';
import PatientMainPanel from './interfaceComponents/PatientMainPanel';

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
