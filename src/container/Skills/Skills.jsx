import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.scss'
import { images } from '../../constants';
const Skills = () => {
  const skills = [
    {img :images.html, name: 'HTML' },
    {img :images.css, name: 'CSS' },
    {img :images.javascript, name: 'JavaScript' },
    {img :images.react, name: 'React' },
    {img :images.Nextjs, name: 'Nextjs' },
    {img :images.tailwind, name: 'Tailwind'},
    {img :images.typescript, name: 'TypeScrit'},
    {img :images.firebase, name: 'Firebase'},
    {img :images.sass, name: 'Sass'},
    {img :images.git, name: 'Git' },
    {img :images.figma, name: 'Figma' },
  ]

  return (
    <div id='Skills' className='pT'>
      <h2 className="head-text">Skills</h2>
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
                <img src={skill.img} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}

export default Skills