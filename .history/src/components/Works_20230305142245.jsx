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
      <div className=''>

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");