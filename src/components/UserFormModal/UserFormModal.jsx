import React from "react";
import "./UserFormModal.css";

export const UserFormModal = ({ closeEvent }) => {
  return (
    <div className="modal">
      <div className="modal-context">
        <div className="modal-header">
          User information
          <div className="close" onClick={() => closeEvent()}>
            X
          </div>
        </div>
        <div className="modal-body">
          
        </div>
      </div>
    </div>
  );
};
