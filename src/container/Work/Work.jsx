import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Work.scss';
import { project } from './project';

const Work = () => {

  const [works, setWorks] = useState (project)
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  
  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setWorks(project);
      } else {
        setWorks(project.filter(project => project.tags.includes(item)))
      }
    }, 500);
  };
  

  return (
    <div id='Work' className='pT'>
      {/* <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2> */}
      <h2 className="head-text">Real <span>World</span> Projects</h2>
      <div className="app__work-filter">
        {['All', 'Personal', 'Website', 'Landing Page', 'Web App', 'Dashboard', 'Mobile Apps'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
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
        {works.map((work) => (
          <div className="app__work-item app__flex" key={work.id}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.url} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.url} target="_blank" rel="noreferrer">
                  {/* <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div> */}
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                <p style={{ fontWeight: '500' }}>Stack:</p>
                <p className='p-text'>{work.stack.join(', ')}</p>
              </div>
              

              <div className="app__work-tag app__flex">
              <p className="p-text">{work.tags.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work