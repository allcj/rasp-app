import React, { Component } from 'react';
import LoadingButton from './../components/LoadingButton';
import $ from 'jquery';
import AuthUtils from '../utils/AuthUtils';
import toastr from 'toastr';
import Config from './../utils/Config';


class LoginPage extends Component {

  constructor(){
    super();
    this.state = {
      isloading : false
    }
    document.title = "ClikSocial - Central de emergências";
    AuthUtils.reset();
  }

  submitForm = (event)=>{
    event.preventDefault();
    this.setState({isloading:true});
    console.log('authenticating user...');
    $.ajax({
        url: Config.routes.login.path,
        type: Config.routes.login.method,
        contentType: 'application/json; charset=utf-8',
        dataType: 'JSON',
        processData: true,
        data: JSON.stringify({
          email: this.refs.email_login.value,
          password: this.refs.password_login.value
        }),
        success: (retorno) => {
          console.log(retorno);
          //this.setState({isloading:false});
          if(retorno.code===0){
            //sucesso  no login
            toastr.success('Aguarde o redirecionamento...', 'Login realizado');
            AuthUtils.create(retorno.content.user_id,{},retorno.content,);
            window.location = '/app';
          }else{
            console.log(retorno);
            switch (retorno.code) {
              case 4:
                toastr.error('Usuário ou senha incorretos', 'Atenção');
                this.refs.password_login.value = "";
                this.refs.password_login.focus();
                this.setState({isloading:false});
                break;
            
              default:
                toastr.error('Ocorreu um erro durante a operação. Tente novamente mais tarde.', 'Atenção');
                this.setState({isloading:false});
                break;
            }
          }
        }
    });
    console.log('teste');
  }

  render() {
    return (
      <body className="page-login-v3 layout-full screen">
      <div className="page">
        <div className="page-content col-sm-7 col-md-4 centered mt-100">
          <div className="panel nomargin-bottom border-radius">
            <div className="panel-body shadowbox-custom border-radius">

              <div className="brand  text-center mt-20 mb-20">
                <img className="brand-img" src="https://s3-sa-east-1.amazonaws.com/cliksocial-pictures/assets/email/cs_logo_373x100.png" width="200px" alt="SupportClik"/>
              </div>


              <form method="post" onSubmit={this.submitForm}>

                <div className="col-sm-12">
                  <div className="form-material floating" data-plugin="formMaterial">
                    <input type="email" className="form-control font-bold lowercase" ref="email_login" required={true}/>
                    <label className="floating-label">Digite seu email</label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-material floating" data-plugin="formMaterial">
                    <input type="password" className="form-control font-bold lowercase" ref="password_login" required={true}/>
                    <label className="floating-label">Digite sua senha</label>
                  </div>
                </div>

                {/*<div className="col-sm-12 text-right">
                  <a className="animsition-link" href="./passrecovery">Esqueceu a senha?</a>
                </div>*/}

                <div className="col-xs-12 mt-20 mb-20">
                  <LoadingButton
                    type="submit"
                    className="btn btn-primary btn-block btn-lg isLoading font-sm font-bold uppercase pt-15 pb-15"
                    text="Entrar"
                    isloading={this.state.isloading}
                  />
                </div>
              </form>
              {/*<p className="col-xs-12 text-center mt-40">Ainda não tem conta? <a href="/signup" className="animsition-link">Cadastre-se</a></p>*/}
            </div>
          </div>
        </div>
      </div>
      </body>
    );
  }

  componentDidMount(){
    this.refs.email_login.focus();
  }

}

export default LoginPage;
