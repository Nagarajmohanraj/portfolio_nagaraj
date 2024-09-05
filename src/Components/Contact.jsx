
import React, { useState } from 'react';
import '../Styles/Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';




function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2r02j5i', // Replace with your EmailJS Service ID
      'template_zauyxwd', // Replace with your EmailJS Template ID
      formData,
      '6bgBRsIqE4v16JWa-' // Replace with your EmailJS User ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, (error) => {
      alert('Failed to send message, please try again.');
    });
  };


  return (
       
      <section className="contact">
        <h2>Connect Us</h2>
        <div className='main-contact'>
        <div className='contact1'>
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/nagaraj-m-abaa91311/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
          </li>
          <li>
          <a href="https://github.com/Nagarajmohanraj" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
          </li>
          <li>
          <a href="https://www.instagram.com/__.naga.__official_/?igsh=MWhhZTFpamlmYnMyag%3D%3D" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
           </a>
          </li>
          {/* <li>
          <a href="" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
          </li> */}
        </ul>
        </div>

      
         <div className='contact2'>
      <form onSubmit={handleSubmit}>
        <label className=''>Name:</label>
        <input 
          type='text' 
          name='name'
          placeholder='Enter your name' 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className=''>Email:</label>
        <input 
          type='email' 
          name='email'
          placeholder='Enter your mail address' 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className=''>Subject:</label>
        <input 
          type='text' 
          name='subject'
          placeholder='Enter a subject' 
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label className=''>Message:</label>
        <textarea 
          id="message" 
          name="message" 
          rows="6" 
          cols="50" 
          placeholder="Enter your message here..." 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br />
        <button className='submit' type='submit'>Submit</button>
      </form>
    </div>

        </div>
      </section>
    
  );
};

export default Contact;
