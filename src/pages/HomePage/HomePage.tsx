import React, { FC } from 'react';
import { About } from '../../components/About';
import { Intro } from '../../components/Intro';

export const Home: FC = () => {
  return (
    <div className="container">
      <Intro />
      <About />
    </div>
  );
};