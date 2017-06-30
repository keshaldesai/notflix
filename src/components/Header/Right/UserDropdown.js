import React from "react";

const UserDropdown = () => {
  return (
    <div className="user-options">
      <div className="other-user">
        <img
          src="https://secure.netflix.com/ffe/profiles/avatars_v2/32x32/PICON_025.png"
          alt="icon"
          className="other-user-icon"
        />
        User
      </div>
      <div className="other-user">
        <img
          src="https://secure.netflix.com/ffe/profiles/avatars_v2/32x32/PICON_036B.png"
          alt="icon"
          className="other-user-icon"
        />
        Kids
      </div>
      <div className="user-link user-manage">Manage Profiles</div>
      <div className="user-link">Account</div>
      <div className="user-link">Help Center</div>
      <div className="user-link">Sign out of Netflix</div>
    </div>
  );
};

export default UserDropdown;
