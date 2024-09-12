import React from 'react';
import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'
import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <a href="https://www.linkedin.com/in/iangola-andrianarison-166a58271/" target="_blank" rel="noopener noreferrer">
        <img 
            src={LinkedIn} 
            alt="Clickable Example Image" 
            style={{ cursor: 'pointer', width: '150px', height: '150px' }}
        />
        </a>
      <a href="https://github.com/IangolaAndri" target="_blank" rel="noopener noreferrer">
        <img 
            src={Github} 
            alt="Clickable Example Image" 
            style={{ cursor: 'pointer', width: '150px', height: '150px' }}
            />
        </a>
      <h2>iangola.andrianarison@gmail.com</h2>
    </section>
  );
}

export default Contact;