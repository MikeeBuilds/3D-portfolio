import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import me from '../assets/me.jpg';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
    >
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
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

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse ">
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
      <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="rounded-full xs:w-[350px] w-full green-pink-gradient p-[1px]  shadow-card"
            style={{ marginTop: '-35px' }} 
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="rounded-full bg-tertiary min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={me}
                alt="MyPhoto"
                className="rounded-full w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
      

      <div className='mt-20 flex flex-wrap gap-10 justify-center '>
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');