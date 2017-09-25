import React, { Component } from 'react';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import { Modal,Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MapaSos from '../components/MapaSos';
import Config from '../utils/Config.js';
import $ from 'jquery';
import toastr from 'toastr';
import AuthUtils from '../utils/AuthUtils';
import PubSub from 'pubsub-js';


const socket = io.connect("http://localhost:50780");
const soundNotification = new Audio('/assets/sounds/solemn.mp3');


class App extends Component {

  constructor(){
    super();
    this.state = {
      emergency : undefined,
      show_new_request_modal : false
    }
  }


  get_call(cellphone){
    $.ajax({
      url: 'http://165.227.83.73/call/'+cellphone,
      type: 'GET',
      success: (retorno) => {
        console.log(retorno.content);
        this.setState({
          emergency:retorno.content
        });
        PubSub.publish('UPDATE-MAPS',retorno.content);
      },
      error: (error, errorStatus, errorText) => {
        console.log(error);
        PubSub.publish('FINISH-EMERGENCY',{});
      }
    });
    //console.log(AuthUtils.user());
   //alert(cellphone);
  }

  showModalNotifications = (status)=>{
    this.setState({show_new_request_modal:status});
  }

  render() {
    return (
      <SocketProvider socket={socket}>
        <div className="full-height">
           <Modal show={this.state.show_new_request_modal}>
          <form >
            <Modal.Header className="text-center bg-gryey-100 border-radius">
              <h2 className="font-family-opensans grey-700 text-center mb-30">
                <span className="font-bold uppercase"><i className="md-alert-triangle"></i> Atenção</span>
                <br/>
                <small className="grey-600">Você recebeu uma nova solicitação de emergência</small>
                <br/>
                <Button className="mt-20 font-bold mr-10" bsStyle="success" onClick={()=>this.next_emergency()}><i className="md-check"></i> ACEITAR</Button>
                <Button className="mt-20 font-bold" bsStyle="default" onClick={()=>this.showModalNotifications(false)}><i className="md-close"></i> RECUSAR</Button>
              </h2>
              <div className="clear"></div>
            </Modal.Header>
          </form>
        </Modal>
          <NavBar/>
          <div className="">
            {/*<SideBar solicitacoes={this.state.solicitacoes} selecionar/>*/}
            {
              this.state.emergency ?
              <MapaSos dados={this.state.emergency}/> :
              <h1 id='label-chamado' className="">
              <i className="animated pulse infinite md-portable-wifi-changes" style={{fontSize:'2.0em'}}></i><br/><br/>
              Aguardando chamado</h1>
            }
          </div>
          <div className="clear"></div>
        </div>

      </SocketProvider>
    );
  }

  componentDidMount(){

    //this.open_emergency();

    socket.on('new_call', (msg)=>{
      console.log(msg);
      if(msg!==undefined){
        var cellphone = msg;
        this.get_call(cellphone);
        //this.loadSolicitacoes();
        //toastr.warning('Nova solicitação de resgate', 'Atenção!');
        //this.showModalNotifications(true);
        //soundNotification.play();
      }
    });
    
    /*PubSub.subscribe('UPDATE-MAPS',(event, data)=>{
      this.setState({
            emergency:true,
            show_new_request_modal:false
      });
    });*/

    PubSub.subscribe('FINISH-EMERGENCY',(event, data)=>{
      this.setState({
            emergency:undefined,
            show_new_request_modal:false
      });
    });

  }
}

export default App;
