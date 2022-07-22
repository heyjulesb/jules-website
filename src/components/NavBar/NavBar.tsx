import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar: FC = () => {
  return (
    <nav className='navBar'>
      <Link className='navLink' to="/jules-website"> Home </Link>
      <Link className='navLink' to="#about"> About </Link>
      <Link className='navLink' to="https://medium.com/@heyjulesb" target="_blank" rel="noreferrer"> Blog </Link>
      <Link className='navLink' to="/jules-website/portfolio"> Portfolio </Link>
      <Link className='navLink' to="#contact"> Contact </Link>
    </nav>
  )
};