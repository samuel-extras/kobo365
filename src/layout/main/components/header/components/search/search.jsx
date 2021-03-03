import React from "react";

const NavSearch = () => {
  return (
    <div className="user-notification-block align-right d-inline-block">
      <div className="top-nav-search item-animated">
        <form>
          <input type="text" className="form-control" placeholder="Search here" />
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default NavSearch;
