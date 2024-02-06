import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />}></Route>
        <Route path="/add-contact" element={<ContactForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
