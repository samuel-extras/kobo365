import React from "react";

const EmployeeForm = () => {
  return (
    
          <div className="col-xl-9 col-lg-8 col-md-12">
            {" "}
            <div className="accordion add-employee" id="accordion-details">
              <div className="card shadow-sm ctm-border-radius">
                <div className="card-header" id="basic1">
                  <h4 className="cursor-pointer mb-0">
                    <div
                      className=" coll-arrow d-block text-dark"
                      data-toggle="collapse"
                      data-target="#basic-one"
                      aria-expanded="true"
                    >
                      Basic Details
                      <br />
                      <span className="ctm-text-sm">Organized and secure.</span>
                    </div>
                  </h4>
                </div>
                <div className="card-body p-0">
                  <div
                    id="basic-one"
                    className="collapse show ctm-padding"
                    aria-labelledby="basic1"
                    data-parent="#accordion-details"
                  >
                    <form>
                      <div className="row">
                        <div className="col form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Middle Name"
                          />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name (Surname)"
                          />
                        </div>
                        <div className="col-12 form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col form-group">
                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col form-group">
                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Secondary Phone Number"
                          />
                        </div>
                        <div className="col-md-12">
                          <div className=" custom-control custom-checkbox mb-0">
                            <input
                              type="checkbox"
                              id="send-email"
                              name="send-email"
                              className="custom-control-input"
                            />
                            <label
                              className="mb-0 custom-control-label"
                              htmlFor="send-email"
                            >
                              Send them an invite email so they can log in
                              immediately
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm ctm-border-radius">
                <div className="card-header" id="headingTwo">
                  <h4 className="cursor-pointer mb-0">
                    <div
                      className="coll-arrow d-block text-dark"
                      data-toggle="collapse"
                      data-target="#employee-det"
                    >
                      Employment Details
                      <br />
                      <span className="ctm-text-sm">
                        Let everyone know the essentials so they're fully
                        prepared.
                      </span>
                    </div>
                  </h4>
                </div>
                <div className="card-body p-0">
                  <div
                    id="employee-det"
                    className="collapse show ctm-padding"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion-details"
                  >
                    <form>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <select className="form-control select">
                            <option defaultValue>Country of Employment </option>
                            <option value="1">Nigeria</option>
                            <option value="2">Ghana</option>
                            <option value="3">USA</option>
                          </select>
                        </div>
                        <div className="col-md-12 form-group">
                          <div className="cal-icon">
                            <input
                              className="form-control datetimepicker cal-icon-input"
                              type="text"
                              placeholder="Start Date"
                            />
                          </div>
                        </div>
                        <div className="col-12 form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Job Title"
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <select className="form-control select">
                            <option defaultValue>Teams </option>
                            <option value="1">PHP</option>
                            <option value="2">Android</option>
                            <option value="3">Testing</option>
                            <option value="3">Designing</option>
                            <option value="3">IOS</option>
                            <option value="3">Business</option>
                          </select>
                        </div>
                        <div className="col-12 form-group mb-0">
                          <p className="mb-2">Employment Type</p>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="Permanent"
                              name="Permanent"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="Permanent">
                              Permanent
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="Freelancer"
                              name="Permanent"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="Freelancer"
                            >
                              Freelancer
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm ctm-border-radius">
                <div className="card-header" id="headingFour">
                  <h4 className="cursor-pointer mb-0">
                    <div
                      className="coll-arrow d-block text-dark"
                      data-toggle="collapse"
                      data-target="#salary_det"
                    >
                      Salary Details
                      <br />
                      <span className="ctm-text-sm">
                        Stored securely, only visible to Super Admins, Payroll
                        Admins, and themselves.
                      </span>
                    </div>
                  </h4>
                </div>
                <div className="card-body p-0">
                  <div
                    id="salary_det"
                    className="collapse show ctm-padding"
                    aria-labelledby="headingFour"
                    data-parent="#accordion-details"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="col-12 form-group">
                        <select className="form-control select">
                          <option defaultValue>Frequency</option>
                          <option value="1">Annualy</option>
                          <option value="2">Monthly</option>
                          <option value="3">Weekly</option>
                          <option value="4">Daily</option>
                          <option value="5">Hourly</option>
                          <option value="6">Fixed</option>
                        </select>
                      </div>
                      <div className="col-md-12 form-group mb-0">
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker cal-icon-input"
                            type="text"
                            placeholder="Start Date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-sm ctm-border-radius">
                <div className="card-header" id="headingFour">
                  <h4 className="cursor-pointer mb-0">
                    <div
                      className="coll-arrow d-block text-dark"
                      data-toggle="collapse"
                      data-target="#salary_det"
                    >
                      Bank Details
                      <br />
                      <span className="ctm-text-sm">
                        Stored securely, only visible to Super Admins, Payroll
                        Admins, and themselves.
                      </span>
                    </div>
                  </h4>
                </div>
                <div className="card-body p-0">
                  <div
                    id="salary_det"
                    className="collapse show ctm-padding"
                    aria-labelledby="headingFour"
                    data-parent="#accordion-details"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Bank Name"
                        />
                      </div>
                      <div className="col-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Account Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="submit-section text-center btn-add">
                  <button className="btn btn-theme text-white ctm-border-radius button-1">
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          </div>
        
  );
};
export default EmployeeForm;
