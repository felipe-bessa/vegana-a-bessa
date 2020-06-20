// SocialMediaButtons/SocialMediaButtons.js

import React from 'react';

import './styles.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

export default function SocialMediaButtons() {
  return(
    <ul className="socialMediaButtons">
      <li>
        <a href="https://www.facebook.com/veganaabessa">
          <FaFacebookF />
          <label>Facebook</label>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/veganaabessa">
          <FaTwitter />
          <label>Twitter</label>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/veganaabessa">
          <FaInstagram />
          <label>Instagram</label>
        </a>
      </li>
      <li>
        <a href="https://br.pinterest.com/veganaabessa">
          <FaPinterestP />
          <label>Pinterest</label>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCeS4U9imVoJkoouI1TWMK5g">
          <FaYoutube />
          <label>Youtube</label>
        </a>
      </li>
    </ul>
  );
}