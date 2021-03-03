import React from "react";
import { Link, } from "react-router-dom";

import data from "./data.js";

const HeaderMenuList = () => {
  return (
    <div className="header-wrapper d-none d-sm-none d-md-none d-lg-block">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-menu-list d-flex bg-white rt_nav_header horizontal-layout nav-bottom">
              <div className="append mr-auto my-0 my-md-0  mr-auto">
                <ul className="list-group list-group-horizontal-md mr-auto">
                  {data.map((item, i) => (
                    <li className="mr-1 " key={i}>
                    
                      <Link to={item.link} className="btn-ctm-space text-dark">
                        <span className={`${item.icon} pr-0 pr-lg-2`}></span>
                        <span className="d-none d-lg-inline">{item.nav}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderMenuList;
