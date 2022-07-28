import React from "react";
import { Route, Switch, Redirect, useHistory, Link } from "react-router-dom";
import logoPath from "./../images/logo-star-wars.png";

const Header = (props) => {
    
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__group-logo"
          src={logoPath}
          alt="логотип сайта star-wars"
        />
        <nav className="header__menu"></nav>
      </header>
    </div>
  );
};

export default Header;
