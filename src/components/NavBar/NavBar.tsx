import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css';

export const NavBar: FC = () => {
  return (
    <nav className='navBar'>
      <Link className='navLink' to="/jules-website"> Home </Link>
      <HashLink smooth className='navLink' to="/jules-website#about"> About </HashLink>
      <Link className='navLink' to="https://medium.com/@heyjulesb" target="_blank" rel="noreferrer"> Blog </Link>
      <Link className='navLink' to="/jules-website/portfolio"> Portfolio </Link>
      <HashLink smooth className='navLink' to="#contact"> Contact </HashLink>
    </nav>
  )
};