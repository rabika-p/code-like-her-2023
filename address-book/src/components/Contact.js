import React from "react";

import "../ContactList.css";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Contact = ({ contact }) => {
  const {name, phoneNumber, address, email, type, category, profileImage} = contact;

  return (
    <div className="contact-item">
      {/* display images from path public/assets/images */}
      <img src={`/assets/images/${profileImage}`} alt={name} className="contact-image" />
      <div className="contact-main">
        <h2 className="contact-name">{name}</h2>
        <h4 className="contact-category">{category}</h4>
      </div>
      <h4 className="contact-phone">{phoneNumber}</h4>
      <h4 className="contact-email">{email}</h4>
      <h4 className="contact-type">{type}</h4>
      <h4 className="contact-address">{address}</h4>

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
