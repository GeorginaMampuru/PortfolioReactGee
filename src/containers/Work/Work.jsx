import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.css";

const Work = () => {
  const worksData = [
    {
      title: "Mzamomtsha Primary School",
      description:
        "Webstite For A Primary School To Showcase The Schools Success And Expasion And Footprint",
      projectLink: "https://luxury-daifuku-57e814.netlify.app/",
      codeLink: "https://github.com/GeorginaMampuru/Mzamomtsha",
      imgUrl: images.work02,
      tags: ["React", "All"]
    },
    {
      title: "Finacial Calculator",
      description:
        "Finance Calculator Is A Python Program With A GUI That Allows Users To Perform Financial Calculations..",
      projectLink:
        "https://github.com/GeorginaMampuru/PythonProjects/tree/main/FinaceCalculator",
      codeLink:
        "https://github.com/GeorginaMampuru/PythonProjects/tree/main/FinaceCalculator",
      imgUrl: images.work03,
      tags: ["React", "All"]
    },
    {
      title: "React ChatApp",
      description:
        "The Chat Bot Is A Web Application That Uses React, Node.Js, And Chat Engine To Create A Real-Time Chat Interface With An AI-Powered Chat Bot.",
      projectLink: "https://github.com/GeorginaMampuru/ChatBotWithReact",
      codeLink: "https://github.com/GeorginaMampuru/ChatBotWithReact",
      imgUrl: images.about02,
      tags: ["HTML, CSS, JS", "All"]
    }
  ];

  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX/Figma", "Web App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__work-hover_github"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
