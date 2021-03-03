import React from 'react';
import data from "./data.js"

const Widgets=()=>{
    return (
      <div className="row">
        {
        data.map((item, i)=>(

          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
            <div className="card dash-widget ctm-border-radius shadow-sm">
              <div className="card-body">
                <div className={`card-icon ${item.classes}`}>
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <div className="card-right">
                  <h4 className="card-title">{item.widget}</h4>
                  <p className="card-text">{item.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))  
      }
        
      </div>
    );
}
export default Widgets