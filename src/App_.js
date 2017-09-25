import React, { Component } from 'react';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import { Modal,Button } from 'react-bootstrap';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MapaSos from './components/MapaSos';
import Config from './utils/Config.js';
import $ from 'jquery';
import toastr from 'toastr';


const socket = io.connect("http://104.236.251.90:9000");
const soundNotification = new Audio('/assets/sounds/solemn.mp3');


class App extends Component {

  constructor(){
    super();
    this.state = {
      solicitacoes : [],
      solicitacao_selecionada : {},
      show_new_request_modal : false
    }
  }

  loadSolicitacoes(){
    $.ajax({
      url: Config.routes.emergency.list.path,
      type: Config.routes.emergency.list.method,
      contentType: "application/json",
      dataType: "json",
      success: (retorno) => {
        
        var listSolicitacoes = retorno.content === null || retorno.content === undefined ? [] : retorno.content
        this.setState({
          solicitacoes:listSolicitacoes
        });

        console.log(retorno);
        //console.log(this.state.solicitacoes);
        
      },
      error: (error, errorStatus, errorText) => {
        console.log(error);
      }
    });
    console.log('teste');
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
            <Modal.Header className="text-center bg-red-700">
              <h2 className="pull-left font-family-opensans red-100">
                Atenção
                <br/>
                <small className="red-200">Você recebeu uma nova solicitação de emergência.</small>
                <br/>
                <div className="col-sm-12 mt-20 mb-30">
                  <Button bsStyle="danger" onClick={()=>this.showModalNotifications(false)}>OK</Button>
                </div>
              </h2>
            </Modal.Header>
          </form>
        </Modal>
          <NavBar/>
          <div className="">
            <SideBar solicitacoes={this.state.solicitacoes} selecionar/>
            <MapaSos dados={this.state.solicitacao_selecionada}/>
          </div>
          <div className="clear"></div>
        </div>

      </SocketProvider>
    );
  }

  componentDidMount(){
    this.loadSolicitacoes();

    //this.showModalNotifications(true);
    //soundNotification.play();

    socket.on('ping', (msg)=>{
      if(msg!==undefined){
        this.loadSolicitacoes();
        //toastr.warning('Nova solicitação de resgate', 'Atenção!');
        this.showModalNotifications(true);
        soundNotification.play();
      }
    });
  }
}

export default App;
