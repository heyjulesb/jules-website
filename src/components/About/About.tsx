import React, { FC } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export const About: FC = () => {
  return (
    <>
      <section id='about'>
        <div className='aboutWrapper'>
          <div>
            <h1 className='aboutHeader'>About</h1>
          </div>
          <div className='aboutMessageContainer'>
            <p>
              Born and raised Londoner, with a huge interest in building Web UIs
              with React.🤓
            </p>
            <br />
            <p>
              I've recently started a career in Software Engineering as part of
              a career path change. Prior to the career change, I've been
              working in IT support for over 10 years, providing 1st/2nd line
              support to end users.
              <br />
              After spending 10 years working in this area, I felt I’d learned
              all I could learn and wanted to push myself even further, so I
              started to explore other different career paths within the IT
              industry.
            </p>
            <br />
            <p>
              In February 2020, I signed up to an HTML and CSS introduction
              course, and I found myself enjoying creating my own one-page
              website. Aided by self-studying coding, completing courses with{' '}
              <Link to='https://codefirstgirls.com/courses/' target='_blank'>
                Code First: Girls (CFG)
              </Link>{' '}
              and Leeds Trinity University.
            </p>
            <br />
            <p>
              Futhermore, in June 2021, I signed up to the CFG Software
              Specialisation Nanodegree. This was a 12 weeks intensive coding
              course, specialising in Python. The course covered topics
              including: Object-Orientated Programming, algorithm design,
              libaries, data structures, API, debugging and testing. My place
              was sponsored by{' '}
              <Link to='https://dazngroup.com/' target='_blank'>
                DAZN
              </Link>
              , who at the end of the Nanodegree offered a one year placement,
              as a Junior Software Engineer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
