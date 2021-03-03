import React from "react";

const Table = () => {
  return (
    <div className="card shadow-sm ctm-border-radius">
      <div className="card-body align-center">
        <div className="employee-office-table">
          <div className="table-responsive">
            <table className="table custom-table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Employment ID</th>
                  <th>Salary(N)</th>
                  <th>Bank Name</th>
                  <th>Account Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="employment.html" className="avatar">
                      <img
                        alt="avatar"
                        src="/img-9.jpg"
                        className="img-fluid"
                      />
                    </a>
                    <h2>
                      <a href="employment.html">Danny Ward</a>
                    </h2>
                  </td>
                  <td>00213</td>
                  <td>4000</td>
                  <td>Zenith Bank</td>
                  <td> 1123009876</td>
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
