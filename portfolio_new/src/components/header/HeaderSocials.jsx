import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/Passakorn-V" target="_blank">
        <BsGithub />
      </a>
      <a href="https://linkedin.com/in/passakorn-vanchana-b988b7284" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
