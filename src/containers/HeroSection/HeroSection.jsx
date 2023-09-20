// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './HeroSection.css';

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
          <div className="col-lg-6">
            <div className="content">
              <h2>Hi There,<br/> I am Georgina  <span>Mampuru</span></h2>
              <p>i am into <span className="typing-text" ref={typingRef}></span></p>

              <div className="box-container">
                <div className="box">
                  <p><span>Email:</span> georginamampuru@gmail.com</p>
                </div>
              </div>
              <div className="resumebtn">
                <a onClick={() => window.open('https://drive.google.com/file/d/1nvHgyyLs2VMWoS4BssG-TidolVHPAsG7/view?usp=sharing')} className="btn">
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              {/* Add your image source here */}
              <img src="./profileHero.png" alt="Georgina Mampuru" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
