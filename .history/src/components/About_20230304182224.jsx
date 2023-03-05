import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          overview.
        </h2>
      </motion.div>
    </>
  )
}

export default About