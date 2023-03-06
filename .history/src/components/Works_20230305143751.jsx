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
Welcome to my portfolio website! My name is [Your Name] and I am a dedicated self-taught full-stack developer. I specialize in building web applications using React, TailwindCSS, Next.js, and Three.js. I am passionate about solving complex problems and have experience working with a variety of different technologies.

On this website, you will find a showcase of my projects that demonstrate my skills and expertise. Each project has been carefully crafted to showcase my abilities in web development, from the design and user experience to the underlying code.

Whether you are interested in exploring my portfolio, learning more about my experience, or discussing potential collaboration opportunities, I invite you to explore my website and get in touch.

You can find my <a target="" href="https://github.com/YourUsername">GitHub </a>
  repository here. I look forward to hearing from you!

        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");