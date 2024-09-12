import React from 'react';
import './Projects.css'; 
import Photography from '../images/Photography.png'
import BrainHack from '../images/Brainhack.png'
import Spotify from '../images/Spotify.png'

function Projects() {
  return (
    <section id="projects">
      <h1>My projects</h1>
      <p>Here are the projects that I have worked on.</p>
      <a href="https://analaogarchive.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img 
            src={Photography} 
            alt="Clickable Example Image" 
            style={{ cursor: 'pointer', width: '800px', height: '400px' }}
        />
        </a>
      <a href="https://school-brainhack.github.io/project/adhd-prediction/" target="_blank" rel="noopener noreferrer">
        <img 
            src={BrainHack} 
            alt="Clickable Example Image" 
            style={{ cursor: 'pointer', width: '800px', height: '400px' }}
        />
      </a>
      <a href="https://github.com/IangolaAndri/Spotify-API-Project" target="_blank" rel="noopener noreferrer">
        <img 
            src={Spotify} 
            alt="Clickable Example Image" 
            style={{ cursor: 'pointer', width: '800px', height: '400px' }}
        />
        </a>
    </section>
  );
}

export default Projects;