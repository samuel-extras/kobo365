import React from 'react';


const UserDropdownMenu = ()=>{
    return (
      <div className="dropdown-menu notification-dropdown-menu shadow-lg border-0 p-3 m-0 dropdown-menu-right">
        <a className="dropdown-item p-2" href="employment.html">
          <span className="media align-items-center">
            <span className="lnr lnr-user mr-3"></span>
            <span className="media-body text-truncate">
              <span className="text-truncate">Profile</span>
            </span>
          </span>
        </a>
        <a className="dropdown-item p-2" href="profile-settings.html">
          <span className="media align-items-center">
            <span className="lnr lnr-cog mr-3"></span>
            <span className="media-body text-truncate">
              <span className="text-truncate">Settings</span>
            </span>
          </span>
        </a>
        <a className="dropdown-item p-2" href="login.html">
          <span className="media align-items-center">
            <span className="lnr lnr-power-switch mr-3"></span>
            <span className="media-body text-truncate">
              <span className="text-truncate">Logout</span>
            </span>
          </span>
        </a>
      </div>
    );
}
export default UserDropdownMenu;