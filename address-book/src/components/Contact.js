import React from "react";

import "../ContactList.css";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Contact = ({ id, contact }) => {
  return (
    <div className="contact-item">
      <img src={contact.profileImage} alt="Profile" className="contact-image" />
      <div className="contact-main">
        <h2 className="contact-name">{contact.name}</h2>
        <h4 className="contact-category">{contact.category}</h4>
      </div>
      <h4 className="contact-phone">{contact.phone}</h4>
      <h4 className="contact-email">{contact.email}</h4>
      <h4 className="contact-type">{contact.type}</h4>
      <h4 className="contact-address">{contact.address}</h4>

      <div className="contact-buttons">
        <button className="edit-btn">
          <FiEdit className="icon" />
        </button>
        <button className="delete-btn">
          <RiDeleteBinLine className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
