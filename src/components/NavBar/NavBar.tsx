import React, { FC } from 'react';
import './NavBar.css';

export const NavBar: FC = () => {
  return (
    <div className='navBar'>
        <div className='navLink'>
          <a href="#about"> About </a>
        </div>
        <div className='navLink'>
          <a href="https://medium.com/@heyjulesb" target="_blank" rel="noreferrer"> Blog </a>
        </div>
        <div className='navLink'>
          <a href="#portfolio"> Portfolio </a>
        </div>
        <div className='navLink'>
          <a href="#contact"> Contact </a>
        </div>
    </div>
  )
};