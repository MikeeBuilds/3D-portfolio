import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';



const SectionWrapper = (Component, idName) => {
  function HOC () {
    return (
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileIn
        >
            <Component />
        </motion.section>
    )
  }
}

export default SectionWrapper;