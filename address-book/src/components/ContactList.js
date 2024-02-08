import React from "react";

import "../ContactList.css";

import Contact from "./Contact";

import { CiCirclePlus } from "react-icons/ci";

import { Link } from "react-router-dom";

const ContactList = ({contacts}) => {
  return (
    <>
      <div id="mainDiv">
        <div id="titleDiv">
          <h1 id="mainTitle"> Address Book </h1>
          <div>
            <Link to={`/add-contact`}>
              <button className="add-contact-btn">
                <CiCirclePlus className="icon" />
                Add Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-list">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
};

export default ContactList;
