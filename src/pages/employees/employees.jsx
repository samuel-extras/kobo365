import React from "react";
import { Card, Header, Table } from "./components";

class EmployeesPage extends React.Component {
  state={
    displayList : false
  }

  handleDisplayList=()=>{
    this.setState({displayList: true})
  }
  handleDisplayGrid=()=>{
    this.setState({displayList: false})
  }

  render(){

    return (
      <div className="col-xl-9 col-lg-8 col-md-12">
        <Header
          onClickList={this.handleDisplayList}
          onClickGrid={this.handleDisplayGrid}
          display={this.state.displayList}
        />
        <Card display={this.state.displayList} />
        <Table display={this.state.displayList} />
      </div>
    );
  }
};
export default EmployeesPage
