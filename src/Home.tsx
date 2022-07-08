import React, { FC } from 'react';
import './Home.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Intro } from './components/Intro/Intro';

export const Home: FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Intro />
      </div>
      <Footer />
    </>
  );
}
