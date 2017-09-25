import React, { Component } from 'react';

export default class LoadingButton extends Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isloading:props.isloading
  //   }
  // }

  render(){
    return(
      <button
        className={this.props.className}
        type={this.props.type}
        disabled={this.props.isloading}
      >
        {
          this.props.isloading ?
          <i className="fa fa-cog fa-spin"></i>
          :
          this.props.text
        }
      </button>
    );
  }

}
