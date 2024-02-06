import React from "react";

import "../ContactForm.css";

import { TiContacts } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";


const ContactForm = () => {
  return (
    <div className="main">
      <div id="formContainer">
        <div className="form-header">
          <div id="formIcons">
            <TiContacts id="contact-icon" />
            <Link to={`/`}>
              <IoCloseOutline id="close-icon" />
            </Link>
          </div>
          <h1 id="formTitle">Add Contact</h1>
          <p id="formInfo">Enter Contact Information</p>
        </div>

        <form id="addContactForm">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <select id="type" name="type">
                <option value="" disabled selected>
                  Select a type
                </option>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select id="category" name="category">
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="friend">Friend</option>
                <option value="family">Family</option>
                <option value="colleague">Colleague</option>
              </select>
            </div>
          </div>

          <button id="submitBtn" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
