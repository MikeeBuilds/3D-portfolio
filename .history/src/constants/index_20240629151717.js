import {
  threejsport,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sushiman,
  camp,
  taskify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
    link: "https://mikeebuilds.tech",
    external: true,
    newTab: true,
    onClick: (event) => event.preventDefault(),
    target: "_blank",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Development",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Blockchain Developer Bootcamp",
    company_name: "LearnWeb3.io (online)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022 - July 2022",
    points: [
      "This was the start of my first formal programming studies in web development through blockchain",
      "Completed & Recieved Freshman through Senior Degree in the Ethereum Developer Degree Program",
      "The Learnweb3 Ethereum Developer Degree provides a thorough education in blockchain development, covering key topics such as Solidity, Ethereum, JavaScript, NFTs, decentralized exchanges, DAOs, and more",
      "The curriculum encompasses both fundamental concepts like Gas, EVM, and Proof of Stake, as well as advanced topics such as Layer 2, Flash Loans, and on-chain randomness.",
    ],
  },
  {
    title: "Responsive Web Design & Front End Development",
    company_name: "FreeCodeCamp",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - April 2023",
    points: [
      "I mastered responsive web design through FreeCodeCamp, honing skills in HTML5 and CSS3",
      "The Front End Libraries course elevated my proficiency, introducing dynamic frameworks like React and Redux",
      "These courses equipped me to create visually appealing, interactive interfaces for diverse devices",
      "My portfolio reflects expertise in crafting responsive and feature-rich web applications",
    ],
  },
  {
    title: "Web3 & Blockchain Developer & Co-Founder",
    company_name: "Citiz3ns Of Andrometta",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining decentralized applications (dApps) using web3 technologies such as Solidity, Ethereum, and IPFS.",
      "Collaborating with cross-functional teams including designers, product managers, and other blockchain developers to create high-quality products that utilize the latest web3 technology stack.",
      "Implementing responsive design and ensuring cross-chain compatibility for dApps to provide a seamless user experience across multiple blockchain networks.",
      "Participating in code reviews and providing constructive feedback to other blockchain developers to ensure code quality and adherence to best practices in the web3 ecosystem.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with clients to understand their needs and develop software solutions that met their specific requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creating high-quality code and ensuring that it was thoroughly tested to ensure optimal performance and functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mike proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mike does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mike optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sumz",
    description:
      "AI-powered text summarization tool that can condense large blocks of text into shorter, more concise summaries. Just input your desired text in the input box. The tool algorithms to analyze and extract the most relevant information from the text.",
    project_link: "https://ai-summarize-psi.vercel.app/",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ai-summarize-psi.vercel.app/",
  },
  {
    name: "Taskify",
    description:
      "Taskify is a easy to use task manager app with the capabilities of dragging and dropping tasks into different list to fit your schedule. Buildt with Nextjs - Tailwindcss - PrismaDB and more of the latest tech. Try it out now",
    project_link: "https://taskify-virid.vercel.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "web3js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
    ],
    image: taskify,
    source_code_link: "",
  },
  {
    name: "3D Portfolio",
    description:
      "This 3D portfolio project showcases my experience using Threejs and Nextjs using Tailwindcss styling.",
    project_link: "https://2024port.vercel.app/",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "web3js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
    ],
    image: threejsport,
    source_code_link: "https://github.com/MikeeBuilds/2024port",
  },
  {
    name: "Hilink Camping App",
    description:
      "Fully Responsive modern UI/UX website built using Typescript, NextJS + TailwindCSS Showcasing popular camping areas in Oklahoma",
    project_link: "https://camp-sooty.vercel.app/",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mobilefirst",
        color: "yellow-text-gradient",
      },
    ],
    image: camp,
    source_code_link: "https://github.com/MikeeBuilds/camp",
  },
];

export { services, technologies, experiences, testimonials, projects };
