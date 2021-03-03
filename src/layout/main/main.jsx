import React, { Fragment } from "react";
import { Header, SideBar } from "./components";


class Main extends React.Component  {
constructor(props){
super(props);
this.props = props
  this.state = {
    open: false
    
  };
}
  handleSideBar = ()=>{
    this.setState({open: !this.state.open})
  }
  render() {
  return (
    <Fragment>
      <div className="inner-wrapper" style={{overflow: this.state.open? "scroll": "hidden" }}>
        <Header onClick={this.handleSideBar} open={this.state.open} />
        <div className="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <SideBar />
              {this.props.children}
            </div>
          </div>
        </div>
        </div>
        <div className="sidebar-overlay" onClick={this.handleSideBar} style={{display: this.state.open? "flex": "none"}}></div>
    </Fragment>
  );
}
};

export default Main;
