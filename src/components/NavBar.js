import React, { Component } from 'react';
import AuthUtils from '../utils/AuthUtils';

class NavBar extends Component {

  render() {
    return (
      <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-inverse">
        <div className="col-xs-12 centered">


          <div className="navbar-header">
            <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse"
              data-toggle="collapse">
              <i className="icon wb-more-horizontal" aria-hidden="true"></i>
            </button>
            <div className="navbar-brand nopadding-left">
              <a to="/app">
                <img id="logo_dashboard" className="hidden-xs" src="/assets/img/cs_dashboard.png" alt="SupporClik" />
              </a>
              <img id="logo_dashboard_mobile" className="visible-xs" src="/assets/img/logomarca_small_1x.png" height="35px" width="35px" title="SupportClik - Gestão Pública" alt="SupporClik" />
            </div>
            <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search"
              data-toggle="collapse">
              <span className="sr-only">Toggle Search</span>
              <i className="icon wb-search" aria-hidden="true"></i>
            </button>
          </div>


          <div className="navbar-container container-fluid">
          
          <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">

            <ul className="nav navbar-toolbar navbar-right">
              <li className="nav-item">
                <a className="nav-link navbar-avatar" id='profile-menu'>
                <span className="font-size-normal">
                  {/*<i className='md-account' style={{marginRight:'5px'}}></i> {AuthUtils.user().name}*/}
                </span>
                  {/*<span className="avatar avatar-online">
                    <img alt='Operador' src='/assets/img/avatar_300px.png' />
                  </span>*/}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-avatar" href="/login" id='profile-menu'>
               {/*} <span className="font-size-normal">
                  sair
                </span>*/}
                  {/*<span className="avatar avatar-online">
                    <img alt='Operador' src='/assets/img/avatar_300px.png' />
                  </span>*/}
                </a>
              </li>
            </ul>
            {/* End Navbar Toolbar Right */}
          </div>
         
          {/* Site Navbar Seach */}
          <div className="collapse navbar-search-overlap" id="site-navbar-search">
            <form role="search">
              <div className="form-group">
                <div className="input-search">
                  <i className="input-search-icon wb-search" aria-hidden="true"></i>
                  <input type="text" className="form-control" name="site-search" placeholder="Pesquisar..." />
                  <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search" data-toggle="collapse" aria-label="Close"></button>
                </div>
              </div>
            </form>
          </div>
          {/* End Site Navbar Seach */}
        </div>


        </div>
        
        {/*<div className="navbar-container container-fluid">
          
          <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
            



            {/*<ul className="nav navbar-toolbar navbar-right">
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="" title="Notificações" aria-expanded="false" data-animation="scale-up" role="button">
                  <i className="icon wb-bell" aria-hidden="true"></i>
                  <span className="badge badge-pill badge-danger up">5</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className="dropdown-menu-header">
                    <h5 className="font-semibold font-family-opensans">Notificações</h5>
                  </div>
                  <div className="list-group">
                    <div data-role="container">
                      <div data-role="content">

                        <a className="list-group-item dropdown-item pt-10 pb-10 pl-10 pr-10" href="" role="menuitem">
                          <div>
                            <div className="media-left media-middle">
                              <img alt="/teste" className="notification-item-pic" src="https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/18888527_1927118860879306_4551009864385560576_a.jpg" />
                            </div>
                            <div className="media-body">
                              <h6 className="font-lighter">
                                <span className="font-semibold teal-600">thor</span> curtiu sua foto.
                                <small className="ml-5">14h</small>
                              </h6>
                            </div>
                            <div className="media-right media-middle">
                              <img alt="/teste" className="notification-item-post" src="https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/14583540_1745363895782887_1519254121574563840_a.jpg"/>
                            </div>
                          </div>
                        </a>

                        <a className="list-group-item dropdown-item pt-10 pb-10 pl-10 pr-10" href="" role="menuitem">
                          <div>
                            <div className="media-left media-middle">
                              <img alt="/teste" className="notification-item-pic" src="https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/18888527_1927118860879306_4551009864385560576_a.jpg" />
                            </div>
                            <div className="media-body">
                              <h6 className="font-lighter">
                                <span className="font-semibold teal-600">thor</span> marcou você em uma publicação.
                                <small className="ml-5">14h</small>
                              </h6>
                            </div>
                            <div className="media-right media-middle">
                              <img alt="/teste" className="notification-item-post" src="https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/10727376_1474825569466523_1494442341_a.jpg"/>
                            </div>
                          </div>
                        </a>

                        <a className="list-group-item dropdown-item pt-10 pb-10 pl-10 pr-10" href="" role="menuitem">
                          <div>
                            <div className="media-left media-middle">
                              <img alt="/teste" className="notification-item-pic" src="https://instagram.frec5-1.fna.fbcdn.net/t51.2885-19/s150x150/18888527_1927118860879306_4551009864385560576_a.jpg" />
                            </div>
                            <div className="media-body">
                              <h6 className="font-lighter">
                                <span className="font-semibold teal-600">thor</span> começou a seguir você.
                                <small className="ml-5">14h</small>
                              </h6>
                            </div>
                            <div className="media-right media-middle">
                              <button className="btn btn-primary btn-sm-custom">seguir</button>
                            </div>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>/*}
                  {/*<div className="dropdown-menu-footer">
                    <a className="dropdown-menu-footer-btn" href="" role="button">
                      <i className="icon md-settings" aria-hidden="true"></i>
                    </a>
                    <a className="dropdown-item" href="" role="menuitem">
                      All notifications
                        </a>
                  </div>*/}
                {/*</div>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-avatar" to="/app/profile">
                  <span className="avatar avatar-online">
                    <img alt="/teste" src="http://image.prntscr.com/image/b48bd7f86f8947ccb164cbc2ad48fb7b.png" />

                  </span>
                </Link>
              </li>
            </ul>*/}
            {/* End Navbar Toolbar Right */}
          {/*</div>
         
          {/* Site Navbar Seach */}
          {/*<div className="collapse navbar-search-overlap" id="site-navbar-search">
            <form role="search">
              <div className="form-group">
                <div className="input-search">
                  <i className="input-search-icon wb-search" aria-hidden="true"></i>
                  <input type="text" className="form-control" name="site-search" placeholder="Pesquisar..." />
                  <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search" data-toggle="collapse" aria-label="Close"></button>
                </div>
              </div>
            </form>
          </div>
          {/* End Site Navbar Seach */}
        {/*</div>*/}
      </nav>
    );
  }
}

export default NavBar;
