import React from "react";
import "./UserListItem.css";

export const UserListItem = ({ data, deleteEvent }) => {
  return (
    <div className="user-list-item">
      <div className="user-list-item-icon"></div>
      <div>{`${data.first} ${data.second}   |   ${data.mobile}   |   ${data.email}`}</div>
      <div className="delete" onClick={() => deleteEvent(data.email)}>
        X
      </div>
    </div>
  );
};
