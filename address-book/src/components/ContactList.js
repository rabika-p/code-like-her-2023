import React from "react";

import "../ContactList.css";

import Contact from "./Contact";

import boyIcon from "../assets/images/boy-icon.jpg";
import girlIcon from "../assets/images/girl-icon.jpg";

import { CiCirclePlus } from "react-icons/ci";

import { Link } from "react-router-dom";

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: "Alex Dunphy",
      phone: "9843512712",
      category: "Friend",
      email: "gloria@gmail.com",
      address: "Brentwood",
      type: "Office",
      profileImage: girlIcon,
    },
    {
      id: 2,
      name: "Phil Dunphy",
      phone: "9812617281",
      category: "Family",
      email: "phil@yahoo.com",
      address: "Los Angeles",
      type: "Home",
      profileImage: boyIcon,
    },
  ];
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
