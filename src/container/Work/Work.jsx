import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Work.scss';
import { images } from '../../constants'

const Work = () => {
  const project = [
    {title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01, url: 'https://www.google.co.uk/', id: 'Website' },
    {title: 'Front-End Development', description: 'I am a good web developer', imgUrl: images.about02, url: 'https://www.google.co.uk/', id: 'Mobile App' },
    {title: 'Back-End Development', description: 'I am a good web developer', imgUrl: images.about03, url: 'https://www.google.co.uk/', id: 'Website' },
    {title: 'Mobile Development', description: 'I am a good web developer', imgUrl: images.about04, url: 'https://www.google.co.uk/', id: 'Website' }
  ]

  const [works, setWorks] = useState (project)
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === works.id) {
        setWorks(works);
      } else {
        setWorks(works.filter((work) => work.id.includes(item)));
      }
    }, 500);
  };

  return (
    <div id='Work'>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
      <div className="app__work-filter">
        {['All', 'landing Page', "E-commerce", 'Mobile App'].map((item, index) => (
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
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
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
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
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
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.id}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work