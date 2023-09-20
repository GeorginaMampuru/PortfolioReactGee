// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from "../../constants";
import './Skills.css';

const skillsData = [
  {
    name: "HTML",
    icon: images.html,
  },
  {
    name: "CSS",
    icon: images.css,
  },
  {
    name: "JavaScript",
    icon: images.javascript,
  },
  {
    name: "React",
    icon: images.react,
  },
  {
    name: "Git",
    icon: images.git,
  },
  {
    name: "Figma",
    icon: images.figma,
  },
];

const experienceData = [
  {
    name: "Junior Software Developer",
    company: "Younglings | Intern",
    description: "Introduction to MERN stack development and implementation of e-commerce websites",
    time: "Jul 2023 - Jun 2024"
  },
  {
    name: "Junior Software Developer",
    company: "UVU Africa | CapaCiTi- Intern",
    description: "I've crafted websites with HTML, CSS, and JavaScript, and engineered tax calculators in Java and financial tools in Python, showcasing versatile skills in web development and finance",
    time: "Jan 2023 - July 2023"
  },
  {
    name: "Technical Operations Analyst",
    company: "Aerobotics",
    description: "Database management in RedShift, SQL, data visualization with retired dashboards, Excel proficiency, tracking and mapping stitching issues in Aeroview with Excel and other apps, utilizing stitching reports for issue identification, and expertise in QGIS, AgiSoft, and AWS S3 uploads",
    time: "Apr 2021 - Dec 2022"
  },
  {
    name: "Space Technology Intern",
    company: "Astrofica Technologies",
    description: "Developed and maintained a website using HTML5, CSS, JavaScript, SQL, and version control with Git and GitHub.",
    time: "Sept 2020 - May 2022"
  },
  {
    name: "Computer Systems Engineering Learner Technician",
    company: "ATNS",
    description: "Ensuring compliance with ATNS OH&S plan, facilitating communication with ATC, peers, and external clients, and carrying out all pertinent maintenance tasks",
    time: "Feb 2019 – Jan 2020"
  },
];

// eslint-disable-next-line react-refresh/only-export-components
const Skills = () => {
  const [experiences] = useState(experienceData);
  const [skills] = useState(skillsData);

  return (
    <>
      <h2 className="head-text">Skills &<span>Experiences</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <div className="app__skills-exp-item" key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.time}</p>
              </div>
              <div className="app__skills-exp-works">
                <div
                  className="app__skills-exp-work"
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  <h4 className="bold-text">{experience.name}</h4>
                  <p
                    className="p-text"
                    onMouseEnter={() => {
                      const tooltip = document.getElementById(`tooltip-${index}`);
                      tooltip.style.opacity = '1';
                    }}
                    onMouseLeave={() => {
                      const tooltip = document.getElementById(`tooltip-${index}`);
                      tooltip.style.opacity = '0';
                    }}
                  >
                    {experience.company}
                  </p>
                  {/* Tooltip */}
                  <div
                    id={`tooltip-${index}`}
                    className="skills-tooltip"
                  >
                    {experience.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
