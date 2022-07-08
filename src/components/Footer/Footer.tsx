import React, { FC } from 'react';
import './Footer.css';
import twitterLogo from '../../resources/images/twitter_icon.png';
import linkedinLogo from '../../resources/images/linkedin_icon.png';
import githubLogo from '../../resources/images/github_icon.png';

export const Footer: FC = () => {
  return (
    <footer>
      <div className='footerSocial'>
        <a href='https://twitter.com/heyjulesb' target='_blank' rel="noreferrer">
          <img
            className='socialIcons'
            src={twitterLogo}
            alt='twitter logo'
          />
        </a>
        <a href='https://github.com/heyjulesb' target='_blank' rel="noreferrer">
          <img
            className='socialIcons'
            src={githubLogo}
            alt='github logo'
          />
        </a>
        <a href='https://uk.linkedin.com/in/julieluu1' target='_blank' rel="noreferrer">
          <img
            className='socialIcons'
            src={linkedinLogo}
            alt='linkedin logo'
          />
        </a>
      </div>
      <div className='footerCopyright'>
        <p className='footerMessage'>Designed by Julie Luu | &#169; 2022</p>
      </div>
    </footer>
  );
};
