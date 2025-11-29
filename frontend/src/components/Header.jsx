import React from "react";
import Nav from "./Nav.jsx";
import Logo from "../../public/lightLogo.png";

function Header() {
  return (
    <header className="header">

        <img src="/lightLogo.png" alt="Logo" className="logo" />

      <div className="header-top">
        <h1 className="slogan">A MINY solution to your study session</h1>
      </div>

      <Nav />

    </header>
  );
}

export default Header;
