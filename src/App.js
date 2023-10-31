import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/HomePage/DashBoard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { auth } from "./firebase";
import "./App.css";

const App = (user) => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else{
        setUserName("Guest")
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
