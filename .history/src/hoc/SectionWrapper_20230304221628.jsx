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
        whileInView="show"
        viewport={{ once: }}
        >
            <Component />
        </motion.section>
    )
  }
}

export default SectionWrapper;