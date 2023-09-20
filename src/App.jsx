// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { About,Skills,HeroSection,Footer  } from './containers';
import { About,  Skills, Work ,HeroSection ,Footer } from './containers';
// import { About, Footer,HeroSection  } from './containers';
import { Navbar } from "./components";

import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <HeroSection />
    <About />
   <Work /> 
    <Skills /> 
    <Footer />
  </div>
);

export default App;
