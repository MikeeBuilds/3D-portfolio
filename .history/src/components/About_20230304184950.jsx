import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ title, Icon, index }) => {
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a full stack developer with a passion for creating beautiful and functional web applications. 
        I have a background in computer science and a love for learning new technologies. And love to work closely and collaborate with clients and peers
        I am currently working as a software engineer at <a href="https://www.3dlook.com/" target="_blank" rel="noreferrer">3DLOOK</a> 
        where I am responsible for developing and maintaining the company's web applications. I am also a freelance 
        developer and have worked on a variety of projects ranging from e-commerce websites to web applications for 
        small businesses. Lets work together to bring your ideas to life!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About