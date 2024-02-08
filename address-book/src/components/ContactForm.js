import React, { useState } from "react";

import "../ContactForm.css";

import { TiContacts } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const ContactForm = ({ addContact }) => {
  const [contactData, setContactData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    email: "",
    type: "",
    category: "",
    profileImage: "",
  });

  // function to handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      //dynamic key to get name attribute of inputs
      [name]: value,
    }));
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contactData);
    setContactData({
      name: "",
      phoneNumber: "",
      address: "",
      email: "",
      type: "",
      category: "",
      profileImage: "",
    });
  };

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

        <form id="addContactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleInput}
              required
            />
          </div>

          <div className="inline-form-group">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={contactData.phoneNumber}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={contactData.address}
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleInput}
              required
            />
          </div>

          <div className="inline-form-group">
            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                name="type"
                value={contactData.type}
                onChange={handleInput}
              >
                <option value="" disabled selected>
                  Select a type
                </option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={contactData.category}
                onChange={handleInput}
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="Friend">Friend</option>
                <option value="Family">Family</option>
                <option value="Colleague">Colleague</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="profileImage"
              name="profileImage"
              value={contactData.profileImage}
              onChange={handleInput}
              required
            />
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
