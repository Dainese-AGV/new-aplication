import "./App.css";
import React from "react";
import Header from "./componentrs/Header";
import Navbar from "./componentrs/Navbar";
import Profile from "./componentrs/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
