import React, { Component } from 'react';
import ItemSos from './ItemSos';

class SideBar extends Component {

  constructor(props){
    super(props);
    /*this.state = {
      solicitacoes : props.solicitacoes
    }*/
  }

  listaSolicitacoes(){
    /*if(this.props.solicitacoes.length > 0){
      this.props.solicitacoes.map((solicitacao,index)=>{
        return <h1>Teste</h1>
        //return <ItemSos start_timestamp={1498679731}/>
      })
    }else{
      return <h3 className="font-lighter text-center mt-20">
        <i className="md-alert-circle-o"></i> <br/>
        Nenhuma solicitação encontrada</h3>
    }*/
  }

  render() {
    return (
      <div className="site-menubar site-menubar-light">
        <div className="site-menubar-body">
          <div>
            <div>
              <ul className="site-menu">
                
                {
                  //this.listaSolicitacoes()
                  this.props.solicitacoes.map((solicitacao,index)=>{
                    return <ItemSos dados={solicitacao} key={index}/>
                  })
                }
                
              </ul>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default SideBar;
