import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { images } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Skills.css";
const Skills = () => {



  const experienceData = [
    {
      name: "Junior Software Developer",
      company: "CapaCiTi- Intern",
      description: "I've crafted websites with HTML, CSS, and JavaScript, and engineered tax calculators in Java and financial tools in Python, showcasing versatile skills in web development and finance",
      time: "Jan 2023 - July 2023",
    },
    {
      name: "Technical Operations Analyst",
      company: "Aerobotics",
      description: "Database management in RedShift, SQL, data visualization with retired dashboards, Excel proficiency, tracking and mapping stitching issues in Aeroview with Excel and other apps, utilizing stitching reports for issue identification, and expertise in QGIS, AgiSoft, and AWS S3 uploads",
      time: "April 2021 - Dec 2022",
    },
    {
      name: "Space Technology Intern",
      company: "Astrofica Technologies",
      description:
        "Developed and maintained a website using HTML5, CSS, JavaScript, SQL, and version control with Git and GitHub.",
      time: "September 2020 - May 2022",
    },
    
    {
      name: "Computer Systems Engineering Learner Technician",
      company: "ATNS",
      description: "DEnsuring compliance with ATNS OH&S plan, facilitating communication with ATC, peers, and external clients, and carrying out all pertinent maintenance tasks",
      time: "February 2019 – January 2020",
    },
  ];

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
      name: "TypeScript",
      icon: images.typescript,
    },
    {
      name: "Git",
      icon: images.git,
    },
    {
      name: "Sass",
      icon: images.sass,
    },
    {
      name: "Figma",
      icon: images.figma,
    },
    {
      name: "Material UI",
      icon: images.mu5,
    },
    {
      name: "Storybook",
      icon: images.storybook,
    },
    {
      name: "APIs",
      icon: images.api,
    },
    {
      name: "Notion",
      icon: images.notion,
    },
    {
      name: "Jira",
      icon: images.jira,
    },
    {
      name: "Slack",
      icon: images.slack,
    },
    {
      name: "Zoom",
      icon: images.zoom,
    },
    {
      name: "MacOS",
      icon: images.macOS,
    },
  ];
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);


  return (
    <>
      <h2 className="head-text">Tech Stack & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
