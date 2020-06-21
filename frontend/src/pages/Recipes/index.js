// pages/Recipes/index.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './styles.css';

import Home from '../Home';
import About from '../About';

import Footer from '../../components/Footer/Footer';

export default function Recipes() {
  return(
    <div>
      <header>
        <nav className="navBar">
          <input type="checkbox" id="check"></input>
          <label for="check" className="checkbtn">
            <FaBars color="white" />
          </label>
          <label className="logo">Vegana à Bessa</label>
          <ul>
            <li>
              <Link to={Home}>Home</Link>
            </li>
            <li>
              <Link to={About}>Sobre</Link>
            </li>
            <li>
              <Link to="#">Receitas</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <div>
        
      </div>
      
      <Footer />
    </div>
  );
}