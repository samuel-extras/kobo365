import React from "react";

const Table = ({display}) => {
  return (
    <div
      className="ctm-border-radius shadow-sm card"
      style={{ display: display ? "flex" : "none" }}
    >
      <div className="card-body">
        <div className="table-back employee-office-table">
          <div className="table-responsive">
            <table className="table custom-table table-hover table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    
                    <h2>
                      <div>Danny Ward</div>
                    </h2>
                  </td>
                  
                  <td>
                    <div className="btn btn-outline-warning btn-sm"> Design </div>
                  </td>
                  <td>samuel@gmail.com</td>
                  <td>09022334455</td>
                  <td>
                    <div className="dropdown action-label drop-active">
                      <div
                        
                        className="btn btn-white btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        {" "}
                        Active <i className="caret"></i>
                      </div>
                      <div className="dropdown-menu">
                        <div className="dropdown-item" >
                          {" "}
                          Active
                        </div>
                        <div className="dropdown-item" >
                          {" "}
                          Inactive
                        </div>
                        <div className="dropdown-item" >
                          {" "}
                          Invited
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
