import React from "react";
import { Search } from "..";
import UserAvatar from "../userAvatar";
import { SideBarNavList } from "./components";




const NavSideBar =({onClick, open})=>{    
    return (
      <div className="d-block d-lg-none"
      >
      <div
      >
      <i
          className="fa fa-user  display-5 text-white"
          onClick={onClick}
          style={{cursor: "pointer"}}
          ></i>
        </div>

        <div
          className="offcanvas-menu"
          id="offcanvas_menu"
          style={{width: open? "250px" : "0px"}}
        >
          <span
            className="fas fa-close float-left display-6 position-absolute t-1 l-1 text-white"
onClick={onClick}   style={{cursor: "pointer"}}       ></span>
          <div className="user-info align-center bg-theme text-center">
            <UserAvatar />{" "}
          </div>
          <Search />
          <hr />
          <SideBarNavList onClick={onClick} />
        </div>
      </div>
    );
  }

  

export default NavSideBar
