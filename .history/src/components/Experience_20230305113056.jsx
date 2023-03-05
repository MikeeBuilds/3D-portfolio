import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant} from '../utils/motion';



const ExperienceCard = ({ experience }) => {
  <VerticalTimelineElement
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date={experience.date}
  iconStyle={{ background: experience.iconbg}}
  icon={
    <div>
      <img
      src={experience.icon}
      alt={experience.company_name}
      className='w- h-16 object-contain'
      />
    </div>
  }
  >
    {experience.date}
  </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.heroSubText}>
          What I have done so far.
        </p>
        <h2 className={styles.heroHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
               <ExperienceCard key={index} experience={experience} /> 
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")