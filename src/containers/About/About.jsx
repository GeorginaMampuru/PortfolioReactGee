// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.css";

const abouts = [
  {
    title: "EDUCATION",
    description:
      "I completed my National Diploma in Computer Systems at CPUT in 2020 and am currently pursuing a BET in Computer Engineering, which is set to be completed in 2024.",
    imgUrl: images.about05,
  },
  {
    title: "ACHIEVEMENTS",
   
    description:
      "During the challenging times of the COVID-19 pandemic, when there was a severe shortage of ventilators, we took it upon ourselves to create a prototype for a ventilator. <a href='https://openbooks.uct.ac.za/uct/catalog/view/40/66/2265' target='_blank'>SEE More of the prototype</a>",
    imgUrl: images.about02,
  },
  {
    title: "OPEN SOURCE",
    description:
      "I find fulfillment in contributing to open source projects, sharing knowledge, and engaging with a diverse tech community, offering a rewarding experience of giving back",
    imgUrl: images.about03,
  },
  
];

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
           
            <p
              className="p-text"
              style={{ marginTop: 10 }}
              dangerouslySetInnerHTML={{ __html: about.description }}
            ></p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg" 
); 
