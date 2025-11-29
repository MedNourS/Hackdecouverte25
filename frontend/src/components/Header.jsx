import React from "react";
import Nav from "./nav.jsx";
import Logo from "../../public/lightLogo.png";

function Header() {
  return (
    <header className="header">

        <Logo />

      <div className="header-top">
        <h1>A MINY solution to your study session</h1>
      </div>

      <Nav />

    </header>
  );
}

export default Header;
