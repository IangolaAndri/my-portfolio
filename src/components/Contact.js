import React from 'react';
import LinkedIn from '../images/linkedin.png';
import Github from '../images/github.png';
import './Contact.css';

function Contact() {
  return (
    <div id="contact">
      <h2>Contacts and links</h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/iangola-andrianarison-166a58271/" target="_blank" rel="noopener noreferrer">
          <img 
            src={LinkedIn} 
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/IangolaAndri" target="_blank" rel="noopener noreferrer">
          <img 
            src={Github} 
            alt="GitHub"
          />
        </a>
      </div>
      <h2>iangola.andrianarison@gmail.com</h2>
    </div>
  );
}

export default Contact;
