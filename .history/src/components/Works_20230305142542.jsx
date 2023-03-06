import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';



const Works = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.heroSubText}>
          My Work
        </p>
        <h2 className={styles.heroHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='w-full text-secondary text-[17px] font-semibold leading-[30px]
          max-w-3xl mt-3 '
        >
          Here are some of my projects. I'm currently working on a few projects that
            I'm excited to share with you soon. In the meantime, you can check out my
            
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");