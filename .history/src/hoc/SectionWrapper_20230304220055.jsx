import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';



const SectionWrapper = (component, idName) => {
  function HOC ()
    return (
        <motion.section
        variants={staggerContainer()}
        initial
        >
            <Component />
        </motion.section>
    )
}

export default SectionWrapper;