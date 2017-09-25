import React, { Component } from 'react';
import PubSub from 'pubsub-js';
//import $ from 'jquery';
//import AuthUtils from '../utils/AuthUtils';
//import Config from './../utils/Config';

export default class ItemSos extends Component{


  constructor(props){
    super(props);
    this.state = {
      timeout:0
    }
  }

  selecionarSolicitacao(){
    PubSub.publish('UPDATE-MAPS', this.props.dados );
  }

  render(){
    return(
      <li className="item-sos">
        <h4 className="font-lighter mt-0 mb-0">
          <b>{this.props.dados.name}</b>
        </h4>
        <h6 className="font-lighter mt-5 mb-0">
          <i className="md-pin"></i> {this.props.dados.address}
        </h6>
        <div className="text-right font-sm mt-10">
          <span className="pull-left"><i className="md-time"></i> {this.state.timeout} segs</span>
          <a className="mr-10 teal-700 cursor-pointer" onClick={()=>this.selecionarSolicitacao()}><i className="md-plus"></i> Visualizar</a>
          {/*<a className="cursor-pointer"><i className="md-close"></i> Recusar</a>*/}
        </div>
      </li>
    );
  }

  componentWillMount(){
    /*window.setInterval(()=>{
      var timeout = 60 - ((Date.now() / 1000 | 0) - 1498697580);
      if(timeout<0){
        timeout = 0;
      }
      this.setState({
        timeout: timeout
      });
    }, 1000);*/
  }

}
