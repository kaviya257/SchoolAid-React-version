import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";
import Seekers from "./Seekers";
import Feedback from "./Feedback";
import Helper from "./Helper";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const initialSeekers = [
    { id: 1, name: "Alice", help_needed: "Math Homework" },
    { id: 2, name: "Bob", help_needed: "Science Project" },
    { id: 3, name: "Charlie", help_needed: "English Essay" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onSuccess={() => setLoggedIn(true)} />} />
        <Route path="/welcome" element={loggedIn ? <Welcome /> : <Navigate to="/" />} />
        <Route path="/seeker" element={loggedIn ? <Seekers initialSeekers={initialSeekers} /> : <Navigate to="/" />} />
        <Route path="/helper" element={loggedIn ? <Helper initialSeekers={initialSeekers} /> : <Navigate to="/" />} />
        <Route path="/feedback" element={loggedIn ? <Feedback /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
