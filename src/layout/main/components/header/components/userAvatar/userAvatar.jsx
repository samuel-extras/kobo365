import React from "react";

const UserAvatar = () => {
  return (
    <div
      data-toggle="dropdown"
      className=" menu-style dropdown-toggle"
    >
      <div className="user-avatar d-inline-block">
        <img
          src="/img-9.jpg"
          alt="user avatar"
          className="rounded-circle img-fluid"
          width="55"
        />
      </div>
    </div>
  );
};
export default UserAvatar;
