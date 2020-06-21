// Footer/Footer.js

import React from 'react';

import './styles.css';

import { SocialMediaButtons } from '../SocialMediaButtons';

export default function Footer() {
  return(
    <footer>
      <SocialMediaButtons />
      <div className="disclaimer">
        <p>
          <strong>Vegana à Bessa &copy;</strong>
          2020 - Todos os direiros reservados.
        </p>
      </div>
    </footer>
  );
}