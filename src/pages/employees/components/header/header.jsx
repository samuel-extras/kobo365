import React from "react";
import { Link } from "react-router-dom";

const Header = ({onClickList, onClickGrid, display}) => {
  return (
    <div className="card shadow-sm ctm-border-radius">
      <div className="card-body align-center">
        <h4 className="card-title float-left mb-0 mt-2">7 Employees</h4>
        <ul className="nav nav-tabs float-right border-0 tab-list-emp">
          <li className="nav-item">
            <button
              className={`nav-link border-0 font-23 grid-view ${
                display ? "" : "active"
              }`}
              onClick={onClickGrid}
            >
              <i className="fa fa-th-large" aria-hidden="true"></i>
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={onClickList}
              className={`nav-link border-0 font-23 grid-view ${
                !display ? "" : "active"
              }`}
              style={{backgroundColor: ""}}
            >
              <i className="fa fa-list-ul" aria-hidden="true"></i>
            </button>
          </li>
          <li className="nav-item pl-3">
            <Link
              to="/add-employee"
              className="btn  btn-theme button-1 text-white ctm-border-radius p-3 ctm-btn-padding"
            >
              <i className="fas fa-user-plus"></i> Add Person
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
