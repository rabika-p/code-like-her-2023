import React, { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ContactForm, ContactList } from "./components";


function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Alex Dunphy",
      phone: "9843512712",
      category: "Friend",
      email: "gloria@gmail.com",
      address: "Brentwood",
      type: "Office",
      profileImage: "girl-icon.jpg",
    },
    {
      id: 2,
      name: "Phil Dunphy",
      phone: "9812617281",
      category: "Family",
      email: "phil@yahoo.com",
      address: "Los Angeles",
      type: "Home",
      profileImage: "boy-icon.jpg",
    },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} />}></Route>
        <Route
          path="/add-contact"
          element={<ContactForm addContact={addContact} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
