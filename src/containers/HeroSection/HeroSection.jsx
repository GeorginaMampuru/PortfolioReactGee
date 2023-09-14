
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
  const handleDownloadClick = () => {
   
    const pdfUrl = './Georgina Mampuru - CV 2023.pdf';

    // Create a temporary anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Georgina_Mampuru_CV_2023.pdf';
    anchor.click();

  
    anchor.remove();
  };

  return (
    <section className="home" id="home">
      <div className="content-container">
        <div className="content">
          <h2>Hi There,<br/> I am Georgina  <span>Mampuru</span></h2>
          <p>i am into <span className="typing-text" ref={typingRef}></span></p>

          <div className="box-container">
            <div className="box">
              <p><span>Email:</span> georginamampuru@gmail.com</p>
            </div>
          </div>
          <div className="resumebtn">
          <a onClick={() => window.open('./Georgina Mampuru - CV 2023.pdf')} className="btn">
              <button>DownloadCV</button>
            
            </a>
          </div>
          
        
        </div>
        <div className="image">
          <img draggable="false" className="tilt" src="./profileHero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
