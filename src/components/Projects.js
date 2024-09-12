import React from 'react';
import './Projects.css'; 
import Photography from '../images/Photography.png';
import BrainHack from '../images/Brainhack.png';
import Spotify from '../images/Spotify.png';

function Projects() {
  return (
    <section id="projects">
      <h1>My Projects</h1>

      {/* Photography Project */}
      <div className="project">
        <a href="https://analaogarchive.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img 
              src={Photography} 
              alt="Photography Project" 
              className="project-image"
          />
        </a>
        <div className="project-description">
          <h2>Photography Portfolio</h2>
          <p>This project showcases an archive of analog photography that I have captured and curated. The website is 
            designed with a focus on visual storytelling and includes features for browsing a photo gallery. The webpage
            is accessible <a href="https://analaogarchive.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <h3>Skills learned:</h3>
          <ul>
            <li>React</li>
            <li>CSS & Web design</li>
            <li>Responsive UI</li>
          </ul>
        </div>
      </div>

      {/* BrainHack Project */}
      <div className="project">
        <a href="https://school-brainhack.github.io/project/adhd-prediction/" target="_blank" rel="noopener noreferrer">
          <img 
              src={BrainHack} 
              alt="BrainHack Project" 
              className="project-image"
          />
        </a>
        <div className="project-description">
          <h2>ADHD Prediction - BrainHack</h2>
          <p>This project focuses on using machine learning to predict ADHD from brain imaging data. The project was developed
            during the BrainHack school and aims to familiarize myself with the field of neuroAI. The report is available on the 
            <a href="https://school-brainhack.github.io/project/adhd-prediction/" target="_blank" rel="noopener noreferrer">
              BrainHack school website</a> and the code is avaible on my <a href="https://github.com/brainhack-school2024/andrianarison_project"
               target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
          <h3>Skills learned:</h3>
          <ul>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>NeuroAI</li>
            <li>Data Analysis</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>

      {/* Spotify API Project */}
      <div className="project">
        <a href="https://github.com/IangolaAndri/Spotify-API-Project" target="_blank" rel="noopener noreferrer">
          <img 
              src={Spotify} 
              alt="Spotify API Project" 
              className="project-image"
          />
        </a>
        <div className="project-description">
          <h2>Spotify API Project</h2>
          <p>In this project, I built an application using the Spotify API to analyze users' listening habits. The app 
            retrieves data on favorite artists, tracks, and genres, and presents the information in an interactive dashboard.
            The code is available on my <a href="https://github.com/IangolaAndri/Spotify-API-Project"
               target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
          <h3>Skills learned:</h3>
          <ul>
            <li>JavaScript</li>
            <li>API Integration</li>
            <li>Data Visualization</li>
            <li>OAuth</li>
            <li>Python</li>
          </ul>
        </div>
      </div>

      {/* Portfolio */}
      <div className="project">
        <div className="project-description">
          <h2>Portfolio Project</h2>
          <p>A responsive React-based website showcasing my skills, projects, and experience, featuring smooth 
            navigation, a clean design, and integrated social media links.</p>
          <h3>Skills learned:</h3>
          <ul>
            <li>React</li>
            <li>Git & GitHub</li>
            <li>CSS & Web Design</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default Projects;
