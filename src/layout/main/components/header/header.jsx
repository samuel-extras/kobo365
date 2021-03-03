import React from "react";
import { Link } from "react-router-dom";
import { NavList, Search, UserDropdownMenu, NavSideBar, UserAvatar } from "./components";

const Header = ({onClick, open}) => {
  return (
    
    <header className="header">
      <div className="top-header-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <div className="logo my-3 my-sm-0">
                <Link to="/">
                  <h1 style={{color: "white"}}>
                  KOBO 365
                  </h1>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-6 text-right">
              <div className="user-block d-none d-lg-block">
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Search/>

                    <div className="user-info align-right dropdown d-inline-block header-dropdown">
                      <UserAvatar/>
                      <UserDropdownMenu/>
                    </div>
                  </div>
                </div>
              </div>
              <NavSideBar onClick={onClick} open={open} />
            </div>
          </div>
        </div>
      </div>
<NavList/>
    </header>
  );
};
export default Header;