// eslint-disable-next-line no-unused-vars
import React from 'react';
import { About,  Skills, Work ,HeroSection  } from './containers';
// import { About, Footer, Skills, Work ,HeroSection  } from './containers';
import { Navbar } from "./components";

import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <HeroSection />
    <About />
    <Work />
    <Skills />
    {/* <Footer /> */}
  </div>
);

export default App;
