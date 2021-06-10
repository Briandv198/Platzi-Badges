import React from "react";
import Modal from "./Modal";

import "./styles/deleteBadgeModal.css";

import MainButton from "./MainButton";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="delete-text">
        <h1>Are You Sure?</h1>
        <p>You are about to delet this badge.</p>
      </div>

      <div className="delete-buttons">
        <MainButton
          onClick={props.onClose}
          className="cancel-button"
          content="Cancel"
          color="green"
        />
        <MainButton
          onClick={props.onDeleteBadge}
          className="delete-button"
          content="Delete"
          color="red"
        />
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
