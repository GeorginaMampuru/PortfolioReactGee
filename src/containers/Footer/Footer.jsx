// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.css';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component
import emailjs from 'emailjs-com'; // Import EmailJS

// eslint-disable-next-line react-refresh/only-export-components
const Footer = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to store reCAPTCHA value
  const [validationErrors, setValidationErrors] = useState({
    username: '',
    email: '',
    recaptcha: '', // New state for reCAPTCHA validation
  });

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset validation error for the current input field
    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Store the reCAPTCHA value when it changes

    // Reset reCAPTCHA validation error
    setValidationErrors({ ...validationErrors, recaptcha: '' });
  };

  const handleSubmit = () => {
    setLoading(true);

    // Basic validation
    if (!username || !email || !message) {
      setValidationErrors({
        username: !username ? 'Please enter your name.' : '',
        email: !email ? 'Please enter your email.' : '',
        recaptcha: '', // Clear reCAPTCHA validation error
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationErrors({
        ...validationErrors,
        email: 'Please enter a valid email address.',
        recaptcha: '', // Clear reCAPTCHA validation error
      });
      setLoading(false);
      return;
    }

    // ReCAPTCHA validation
    if (!recaptchaValue) {
      setValidationErrors({
        ...validationErrors,
        recaptcha: 'Please complete the reCAPTCHA.',
      });
      setLoading(false);
      return;
    }
    setRecaptchaValue(null);
    // Clear validation errors for all fields
    setValidationErrors({
      username: '',
      email: '',
      recaptcha: '', 
    });

    // Continue with form submission
    // Send the email using EmailJS
    emailjs
      .send('service_wloglyp', 'template_8y0rznn', formData, 'Bwm5Pu7SHOLV3EAxk') 
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
        setRecaptchaValue(null);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <h2 className="head-text">Contact <span>Me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            href="mailto:georginamampuru@gmail.com"
            className="p-text"
            style={{ fontSize: '1rem' }}
          >
            georginamampuru@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:060 688 3521" className=" p-text">
            060 688 3521
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <span className="validation-error">{validationErrors.username}</span>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <span className="validation-error">{validationErrors.email}</span>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <span className="validation-error">{validationErrors.recaptcha}</span>

          <ReCAPTCHA
            sitekey="6LdS0AMoAAAAAD-4dR2RoVgNKXMZMJJgXhv4rlQ-"
            onChange={handleRecaptchaChange}
          />
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
