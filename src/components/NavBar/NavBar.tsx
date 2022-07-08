import React, { FC } from 'react';
import './NavBar.css';

export const NavBar: FC = () => {
  return (
    <nav className='navBar'>
      <a className='navLink' href="#about"> About </a>
      <a className='navLink' href="https://medium.com/@heyjulesb" target="_blank" rel="noreferrer"> Blog </a>
      <a className='navLink' href="#portfolio"> Portfolio </a>
      <a className='navLink' href="#contact"> Contact </a>
    </nav>
  )
};