import React, { FC } from 'react';
import './Intro.css';
import profilePhoto from '../../resources/images/jl.jpeg';



export const Intro: FC = () => {
  return (
    <>
      <header>
        <div className="headerContainer">
            <h1 className="mainHeading">你好! 👋</h1>
            <h6 className="smallHeading">(Hello!)</h6>
          </div>
      </header>
      <main className="introContainer">
        <div className="imageContainer">
          <img className="mainImage" src={profilePhoto} alt='woman in green top wearing glasses' />
        </div>
        <div className="messageContainer">
            <p className="introMessage">I'm Julie.</p>
            <p className="introParagraph"> - Junior Software Engineer. This is my personal website.</p>
        </div>
      </main>
    </>
  );
};
