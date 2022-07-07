import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/ehpip">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.instagram.com/mhmmd_afif_/">
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100047428479008">
      <div>
        <FaFacebookF />
      </div>
    </a>
  </div>
);

export default SocialMedia;
