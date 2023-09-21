// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.css';

// eslint-disable-next-line react-refresh/only-export-components
const Work = () => {
  const [works] = useState([
    {
      title: 'Mzamomtsha Primary School',
      description:
        "Website For A Primary School To Showcase The School's Success And Expansion And Footprint",
      projectLink: 'https://luxury-daifuku-57e814.netlify.app/',
      codeLink: 'https://github.com/GeorginaMampuru/Mzamomtsha',
      imgUrl: images.work02,
      tags: ['WebApp', 'All'],
    },
    {
      title: 'Financial Calculator',
      description:
        'Finance Calculator Is A Python Program With A GUI That Allows Users To Perform Financial Calculations..',
      projectLink:
        'https://github.com/GeorginaMampuru/PythonProjects/tree/main/FinanceCalculator',
      codeLink:
        'https://github.com/GeorginaMampuru/PythonProjects/tree/main/FinanceCalculator',
      imgUrl: images.work03,
      tags: ['Python', 'All'],
    },
    {
      title: 'React ChatApp',
      description:
        'A web application utilizing React, Node.js, and Chat Engine to enable real-time chatting with an AI-powered chat bot',
      projectLink: 'https://github.com/GeorginaMampuru/ChatBotWithReact',
      codeLink: 'https://github.com/GeorginaMampuru/ChatBotWithReact',
      imgUrl: images.work01,
      tags: ['React','All'],
    },
  ]);

  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    if (item === 'All') {
      setFilterWork(works);
    } else if (item === 'UI/UX / Figma') { 
      setFilterWork(works.filter((work) => work.tags.includes('Figma')));
    } else if (item === 'Web App') {
      setFilterWork(works.filter((work) => work.tags.includes('WebApp')));
    } else if (item === 'React JS') {
      setFilterWork(works.filter((work) => work.tags.includes('React')));
    }
    // eslint-disable-next-line no-dupe-else-if
    else if (item === 'Applications') {
      setFilterWork(works.filter((work) => work.tags.includes('Python')));
    }
  };

  return (
    <>
      <h2 className="head-text">
         Creative <span>Projects</span> Section
      </h2>

      <div className="app__work-filter">
        {['Applications', 'Web App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
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
                <a href={work.codeLink} target="_blank" rel="noreferrer">
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

// eslint-disable-next-line react-refresh/only-export-components
export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
