import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Outro from './Outro.js';

const MainBody = () => {
  return(
  <div className='main-body'>
    <Nav />
    <Intro />
    <About />
    <Projects />
    <Contact />
    <Outro />
  </div>
  )
}

ReactDOM.render(
    <MainBody />,
  document.getElementById('root')
);
