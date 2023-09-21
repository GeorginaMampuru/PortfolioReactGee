// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; 
import { AppWrap } from '../../wrapper';
import './HeroSection.css';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const HeroSection = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Development', 'Back-End Development', 'MERN Stack Development'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row">
          <div >
            <motion.div
              variants={scaleVariants} // Apply the animation variants here
              initial="whileInView"
              animate="whileInView"
              className="content"
            >
              <h2>Hi There<span>👋</span>,<br/> I am Georgina  <span>Mampuru</span></h2>
              <p>I am into <span className="typing-text" ref={typingRef}></span></p>

              <div className="box-container">
                <div className="box">
                  <p>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon" />
                    <span>Email:</span> georginamampuru@gmail.com{' '}
                   
                  </p>
                </div>
              </div>
              <div className="resumebtn">
                <a onClick={() => window.open('https://drive.google.com/file/d/1nvHgyyLs2VMWoS4BssG-TidolVHPAsG7/view?usp=sharing')} className="btn">
                  <button>Download CV</button>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              <img src="./profileHero.png" alt="Georgina Mampuru" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(HeroSection, 'home');
