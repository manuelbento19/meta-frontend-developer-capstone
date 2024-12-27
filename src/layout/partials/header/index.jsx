import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from '../../../assets/logo.png';
import './styles.css';
import * as Consts from '../../../constants';

const navLinks = Object.entries(Consts.pages).filter(([_key, value]) => value.anchorable).map(([_key, value]) => value);

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={'/'}>
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button 
          className="nav-bar-hamburger" 
          type="button" 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x" /> : 
            <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul 
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) => 
            <li key={index}>
              <NavLink className={({isActive})=> isActive && 'current-location'} to={navLink.path}>
                {navLink.name}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};