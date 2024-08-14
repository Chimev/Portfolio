import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants'
import './About.scss'

const About = () => {
const abouts = [
  {title: 'Front-End Development', description: "I design and build engaging, responsive UIs that enhance user experience with React.", imgUrl: images.about02 },
  {title: 'Full Stack Development', description: "I develop scalable, high-performance web applications with Next.js.", imgUrl: images.about03 },
  {title: 'Wordpress Deisgner', description: 'I can build website using Wordpress CMS', imgUrl: images.about01 },
  
]

  return (
    <div id='About' className='pT'>
    <h2 className="head-text">I know that <span>Good Development</span> <br /> means <span>Good Business</span> </h2>

    <div className="app__profiles">
    {abouts.map((about, index) => (
      <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition= {{ duration: 0.5, type: 'tween' }}
      className="app__profile-item"
      key={abouts.title + index}
      >
        <img src={about.imgUrl} alt={about.title} />
        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
      </motion.div>
    ))}
    </div>
    </div>
  )
}

export default About