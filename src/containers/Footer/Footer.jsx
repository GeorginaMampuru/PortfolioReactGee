// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import emailjs from '@emailjs'; 
import emailjs from '@emailjs/browser';

import './Footer.css';

// eslint-disable-next-line react-refresh/only-export-components
const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wloglyp', 'template_8y0rznn', form.current, 'Bwm5Pu7SHOLV3EAxk')
      .then((result) => {
        console.log(result.text);
        alert('Message submitted successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('An error occurred. Message not submitted.');
      });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:georginamampuru@gmail.com" className="p-text">georginamampuru@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+27 60 688 3521</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
