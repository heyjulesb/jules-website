import React, { FC } from 'react';
import './Intro.css';
import profilePhoto from '../../resources/images/jl.jpeg';

export const Intro: FC = () => {
  return (
    <>
      <header>
        <div className='headerContainer'>
          <h1 className='mainHeading'>哈囉! 👋</h1>
          <h6 className='smallHeading'>(Hello!)</h6>
        </div>
      </header>
      <main className='introContainer'>
        <div className='imageContainer'>
          <img
            className='mainImage'
            src={profilePhoto}
            alt='woman in green top wearing glasses'
          />
        </div>
        <div className='messageContainer'>
          <p className='introMessage'>
            I'm{' '}
            <span
              style={{
                fontFamily: 'Homemade Apple',
                backgroundColor: '#ab917f',
              }}
            >
              Julie
            </span>
            .
          </p>
          <p className='introParagraph'>
            {' '}
            Welcome to my personal website. The website is built with love,
            using React, CSS and TypeScript.
          </p>
        </div>
      </main>
    </>
  );
};
