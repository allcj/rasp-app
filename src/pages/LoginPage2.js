import React, { Component } from 'react';
import LoadingButton from './../components/LoadingButton';
import $ from 'jquery';
import AuthUtils from '../utils/AuthUtils';
import toastr from 'toastr';
import Config from './../utils/Config';

import '../theme/remark/assets/examples/css/pages/login-v2.min.css';



class LoginPage extends Component {

  constructor(){
    super();
    this.state = {
      isloading : false
    }
    document.title = "ClikSocial - Login";
    AuthUtils.reset();
  }

  submitLogin = (event)=>{
    event.preventDefault();
    this.setState({isloading:true});
    $.ajax({
      url: Config.routes.users.login.path,
      type: Config.routes.users.login.method,
      contentType: 'application/json; charset=utf-8',
      dataType: 'JSON',
      data: JSON.stringify({
        email: this.refs.email_login.value,
        password: this.refs.password_login.value
      }),
      success: (responseJSON)=>{
        console.log(responseJSON);
        if(responseJSON.code===0){
          AuthUtils.create(responseJSON.content.token,{},responseJSON.content.profile_info);
          window.location = '/app';
        }else{
          switch (responseJSON.code) {
            case 4:{
              toastr.error('Usuário ou senha incorretos', 'Atenção');
              this.refs.password_login.value = "";
              this.refs.email_login.focus();
              this.setState({isloading:false});
              break;
            }
            default:{
              toastr.error('Ocorreu um erro durante a operação. Tente novamente mais tarde.', 'Atenção');
              break;
            }
          }
        }
      },
      error: (errorHandler,errorStatus, errorText)=>{
        toastr.error('Ocorreu um erro durante a operação. Tente novamente mais tarde.', 'Atenção');
        this.setState({isloading:false});
      }
    });
  }

  render() {
    return (
      <body className="page-login-v2 layout-full screen">
        <div className="page">
          <div className="page-content">
            <div className="page-brand-info">
              <div className="brand">
                <img className="brand-img" src="/assets/img/cs_dashboard.png" alt="..." width="350px"/>
                {/*<h1 className="font-size-60 c-white nomargin-left mt-0"><span className="font-bold">Clik</span>Social</h1>*/}
              </div>
              <p className="font-size-20 grey-200">Faça parte da maior rede social de pessoas reais do mundo. <br/>Junte-se a nós!</p>
              <div>
                <a href="https://play.google.com/store?hl=pt-br">
                  <img src="assets/img/google-play-badge.png" width="175px" className="mt-20" alt="Google Play Store"/>
                </a>
                <a href="https://itunes.apple.com/br/genre/m%C3%BAsica/id34">
                  <img src="assets/img/app-store-badge.png" width="175px" className="ml-20 mt-20" alt="Apple App Store"/>
                </a>
              </div>
            </div>

            <div className="page-login-main col-sm-5">


              <div className="brand visible-xs col-xs-5 centered">
                <img className="brand-img img-responsive" src="/assets/img/logomarca.png" alt="..."/>
              </div>

              
              <h3 className="font-size-24 text-center">Login</h3>
              <p className="text-center">Digite suas informações para acessar seu perfil.</p>

              <form method="post" onSubmit={this.submitLogin} className="full-width pl-50 pr-50">
                <div className="form-group">
                  <label className="sr-only" htmlFor="inputEmail">Digite seu email</label>
                  <input type="email" className="form-control input-lg" id="inputEmail" name="email" ref="email_login" placeholder="Email" required={true}/>
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="inputPassword">Digite sua senha</label>
                  <input type="password" className="form-control input-lg" id="inputPassword" name="password" ref="password_login" placeholder="Password" required={true}/>
                </div>
                <div className="form-group clearfix">
                  {/*<div className="checkbox-custom checkbox-inline checkbox-primary pull-left">
                    <input type="checkbox" id="remember" name="checkbox"/>
                    <label htmlFor="inputCheckbox">Remember me</label>
                  </div>*/}
                  <a className="pull-right" href="/password_recovery">Esqueceu a senha?</a>
                </div>
                <LoadingButton type="submit" className="btn btn-warning btn-block btn-lg" text="Entrar" isloading={this.state.isloading}/>
                <p className="text-center mt-40 font-bold">Não tem conta? <a href="/signup" className="ml-0">Cadastre-se</a></p>
                
              </form>

            </div>

          </div>
        </div>
      </body>
    );
  }
}

export default LoginPage;
