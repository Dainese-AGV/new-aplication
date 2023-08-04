import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="#top" target="_blank" rel="noreferrer">
          Profile
        </a>
      </div>
      <div>
        <a href="#top" target="_blank" rel="noreferrer">
          Messages
        </a>
      </div>
      <div>
        <a href="#top" target="_blank" rel="noreferrer">
          News
        </a>
      </div>
      <div>
        <a href="#top" target="_blank" rel="noreferrer">
          Music
        </a>
      </div>
      <div>
        <a href="#top" target="_blank" rel="noreferrer">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
