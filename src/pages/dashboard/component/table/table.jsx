import React from "react";
import data from "./data.js"


const Table = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <table className="container">
          <thead>
            <tr>
              <th>
                <h1>Days</h1>
              </th>
              <th>
                <h1>Open</h1>
              </th>
              <th>
                <h1>Close</h1>
              </th>
              <th>
                <h1>Working Hours</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((item, i)=>(

              <tr key={i}>
               <td>{item.days}</td>
               <td>{item.open}</td>
               <td>{item.close}</td>
               <td>{item.hours}</td>
             </tr>
            )) 
          }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
