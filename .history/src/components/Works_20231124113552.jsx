import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-xl font-bold">
            <a
              className="hover:text-purple-300 transform transistion duration-500 ease-in-out"
              href={project_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </h3>
          <p className="text-secondary mt-2 text-[14px]"> {description} </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Solutions In Code</p>
        <h2 className={styles.heroHeadText}>Solutions In Code</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full text-secondary text-[17px] font-semibold leading-[30px]
          max-w-3xl mt-3 "
        >
          I am a dedicated self-taught full-stack developer based in Ft
          Lauderdale Florida. <br />
          <br />
          With tools like React, TailwindCSS, Next.js, and Three.js, I have
          built a passion for solving problems and experience working with these
          various technologies. As a web3 and DeFi builder, I am constantly
          exploring and experimenting with the latest blockchain and
          decentralized technologies to build the future of the web.  <br />
          <br />
            I am a big believer in developing Web3 and DeFi applications, which
          requires a deep understanding of the blockchain and its
          implementation. <br />
          
          <br />
          I have also worked on various other projects, from
          e-commerce platforms to online learning systems, which gives me the
          ability to work with different technologies and industries. <br />

          <br />
          Whether you are interested in exploring my portfolio, learning more about my
          experience, or discussing potential collaboration opportunities, I
          invite you to explore and then get in touch.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
