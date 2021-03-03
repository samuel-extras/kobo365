 import React from "react";
import { Link } from "react-router-dom";
import data from "../../../navList/data"

const SideBarNavList = ({onClick}) => {
  return (
    <>
      <div className="user-menu-items px-3 m-0">
        {data.map((item, i)=>(
          <Link className={item.classes} to={item.link} key={i} onClick={onClick} >
          <span className="media align-items-center">
            <span className="lnr lnr-home mr-3"></span>
            <span className="media-body text-truncate text-left">
              <span className="text-truncate text-left">{item.nav}</span>
            </span>
          </span>
        </Link>
        
        ))
      }
        <Link className="p-2" to="/login">
          <span className="media align-items-center">
            <span className="lnr lnr-power-switch mr-3"></span>
            <span className="media-body text-truncate text-left">
              <span className="text-truncate text-left">Logout</span>
            </span>
          </span>
        </Link>
      </div>
    </>
  );
};

export default SideBarNavList;
