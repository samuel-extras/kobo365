import React from 'react';
import { Table, Widgets } from './component';


const Dashboard =()=>{
    return (
      
            <div className="col-xl-9 col-lg-8 col-md-12">
              <Widgets />
              <Table />
            </div>
          
    );
}
export default Dashboard;