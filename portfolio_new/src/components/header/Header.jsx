import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/Profile1.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <>
      <header id="header">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Passakorn Vanchana</h1>
          <h5 className="text-light">Data Engineer</h5>
          <CTA />
          <div>
            <div className="me">
              <img src={Me} alt="image of Passakorn Vanchana" />
            </div>
          </div>
          <HeaderSocials />
          <a href="#footer" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}


export default Header;
