import React, { Component } from 'react';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import { Modal,Button } from 'react-bootstrap';
import NavBar from './components/NavBar';
import MapaSos from './components/MapaSos';
import Config from './utils/Config.js';
import $ from 'jquery';
import toastr from 'toastr';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import AuthUtils from './utils/AuthUtils';

//PAGES
import LoginPage from './pages/LoginPage';
import OperatorDashboard from './pages/OperatorDashboard';


class App extends Component {

  isAuthorized = ()=>{
    return true;
  }

  render() {
    return (
      <div>
        <body className="site-menubar-unfold screen">
          <OperatorDashboard/>
        </body>
      </div>
    );
  }
}

export default App;
