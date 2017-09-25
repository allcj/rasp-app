import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import AuthUtils from '../utils/AuthUtils';
//import $ from 'jquery';
//import toastr from 'toastr';
import NavBar from './../components/NavBar';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';

class DashboardPage extends Component {

  constructor(){
    super();
    this.state = {
      isloading : false,
      user : [],
      profile_info : []
    }
  }

  render() {
    return (

      <body className="site-menubar-unfold screen">
        <NavBar profile_info={this.state.profile_info}/>
        <Route exact path="/app" component={FeedPage}/>
        <Route exact path="/app/profile" component={ProfilePage}/>
        <Route exact path="/app/profile/:username" component={ProfilePage}/>
      </body>
    );
  }

  componentDidMount(){
    //this.loadFeed();
  }
}

export default DashboardPage;
