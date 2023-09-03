import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

import "./App.scss";

function App() {
  const currentDate = new Date();

  // Define the options for formatting the date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <>
      <Router>
        <p className="date">{formattedDate}</p>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <footer className="flex justify-between align">
          <p>Roni Egbu © 2023. All rights reserved.</p>
          <div className="icons">
            <a
              href="https://www.twitter.com/ronniiii_i"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
