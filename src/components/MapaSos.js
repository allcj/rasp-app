import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Config from '../utils/Config.js';
import $ from 'jquery';

export default class MapaSos extends Component{


  constructor(props){
    super(props);
    this.state = {
      solicitacao:null
    }
  }

  refusedRequest(){
    if(window.confirm("Finalizar atendimento?")){
      $.ajax({
        url: Config.routes.emergency.finish.path,
        type: Config.routes.emergency.finish.method,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          emergency_id: this.state.solicitacao.id
        }),
        success: (retorno) => {
          console.log(retorno);
          PubSub.publish('FINISH-EMERGENCY', {} );
        },
        error: (error, errorStatus, errorText) => {
          console.log(error);
        }
      });
    }
  }

  acceptRequest(){
    //alert(this.refs.estimated_time.value);
    //alert('Solicitaçã aceita');
    $.ajax({
      url: Config.routes.emergency.update.path+'/'+this.state.solicitacao.id,
      type: Config.routes.emergency.update.method,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({
        estimated_time: this.refs.estimated_time.value
      }),
      success: (retorno) => {
        console.log(retorno);
      },
      error: (error, errorStatus, errorText) => {
        console.log(error);
      }
    });
  }

  render(){
    return(
      <div id="mapasos">
      
         <div id="mapa" ref="mapa"></div>
         <div className="clear"></div>

         {
           this.state.solicitacao !== null ?
            <div id="content-info-solicitacao">
              <h2 className="mt-20 col-xs-12 text-shadow c-white">{this.state.solicitacao.patient_name} 
                <br/><small className="text-shadow c-white mb-0"><i className="fa fa-phone"></i> {this.state.solicitacao.requester_name} ({this.state.solicitacao.phone})</small>
                <br/><span className="font-xs font-lighter"><span className="font-sm"><i className="md-pin"></i> {this.state.solicitacao.occurrence_address}</span></span></h2>
              <div className="clear"></div>
              <div className="col-xs-12">
                
                {
                  this.state.solicitacao.situation.includes("1") && 
                  <div className="col-xs-2 item-situation">
                    <span className="text-shadow c-white uppercase">Não respira corretamente</span>
                  </div>
                }

                {
                  this.state.solicitacao.situation.includes("2") && 
                  <div className="col-xs-2 item-situation">
                    <span className="text-shadow c-white uppercase">Inconsciente</span>
                  </div>
                }

                {
                  this.state.solicitacao.situation.includes("3") && 
                  <div className="col-xs-2 item-situation">
                    <span className="text-shadow c-white uppercase">Sangramento</span>
                  </div>
                }

                {
                  this.state.solicitacao.situation.includes("4") && 
                  <div className="col-xs-2 item-situation">
                    <span className="text-shadow c-white uppercase">Convulsões</span>
                  </div>
                }

                {
                  this.state.solicitacao.situation.includes("5") && 
                  <div className="col-xs-2 item-situation">
                    <span className="text-shadow c-white uppercase">Gestante</span>
                  </div>
                }
                
                
              </div>
              <div className="clear"></div>
            </div> 
            :
            <span></span>
         }

         <div className="clear"></div>
 
      </div>
    );
  }

  componentDidMount(){

    this.mapa = new window.google.maps.Map(this.refs.mapa, {
      zoom: 17,
      center: {lat: -8.0288731, lng: -34.8887383}
    });
    this.marker = new window.google.maps.Marker({
      position: {lat: -8.0288731, lng: -34.8887383},
      map: this.mapa,
      title: 'Position'
    });
    //console.log(this.refs)

    PubSub.subscribe('UPDATE-MAPS',(event, data)=>{

      var latitude = parseFloat(data.latitude);
      var longitude = parseFloat(data.longitude);
      

      this.mapa.panTo({
        lat:latitude,
        lng:longitude
      });

      this.marker.setPosition({
        lat:latitude,
        lng:longitude
      });

      this.setState({
        solicitacao:data
      });

    });

  }



  idade = (birthday)=>{
    if(birthday!==null){
      var birthday_components = birthday.split("-");
      var ano_aniversario = parseInt(birthday_components[0]);
      var mes_aniversario = parseInt(birthday_components[1]);
      var dia_aniversario = parseInt(birthday_components[2]);
      var d = new Date,
          ano_atual = d.getFullYear(),
          mes_atual = d.getMonth() + 1,
          dia_atual = d.getDate(),

          quantos_anos = ano_atual - ano_aniversario;

      if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
          quantos_anos--;
      }

      return quantos_anos < 0 ? 0 : quantos_anos;
    }else{
      return "";
    }
  }




}
