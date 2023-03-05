import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariants} from '../utils/motion';


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.heroSubText}>
          Introduction
        </p>
        <h2 className={styles.}>
          Overview.
        </h2>
      </motion.div>
    </>
  )
}

export default About