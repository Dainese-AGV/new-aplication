import logo from "/New-aplication/index/src/image/bird.jpg";
import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} width="60" height="60" alt="lorem"></img>
    </header>
  );
};

export default Header;
