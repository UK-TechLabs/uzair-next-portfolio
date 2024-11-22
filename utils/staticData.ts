import rockdaleReaths from '../public/rockdale_wreaths.png'
import deeplawn from '../public/deeplawn.png'
import servicecart from '../public/servicecart.png'
import threatdefence from '../public/threat_defence.png'
import volt from '../public/volt.png'
import scintillant_ventures from '../public/scintillant_ventures.png'
import qubitx from '../public/qubitx.png'

export const clientSideSkills = [
    { name: 'Javascript', value: 4, icon: 'javascript-plain' },
    { name: 'Typescript', value: 4, icon: 'typescript-plain' },
    { name: 'Next js', value: 4, icon: 'nextjs-plain' },
    { name: 'React js', value: 4, icon: 'react-original' },
    { name: 'Angular', value: 3, icon: 'angular-plain' },
    { name: 'Redux', value: 4, icon: 'redux-original' },
    { name: 'Redux Thunk', value: 3, icon: 'redux-original' },
    { name: 'Tailwind CSS', value: 4, icon: 'tailwindcss-original' },
    { name: 'Sass', value: 4, icon: 'sass-original' },
    { name: 'Css 3', value: 4, icon: 'css3-plain' },
    { name: 'Mui', value: 4, icon: 'materialui-plain' },
    { name: 'Bootstrap', value: 4, icon: 'bootstrap-plain' },
    { name: 'React Bootstrap', value: 4, icon: 'reactbootstrap-original' },
    { name: 'Angular Material', value: 3, icon: 'angularmaterial-plain' },
    { name: 'Html 5', value: 4, icon: 'html5-plain' },
];

  export const serverSideSkills = [
    { name: 'Node.js', value: 4, icon: 'nodejs-plain' },
    { name: 'Express.js', value: 4, icon: 'express-original' },
    { name: 'Prisma', value: 4, icon: 'prisma-original' },
    { name: 'Mongoose', value: 4, icon: 'mongoose-original' },
    { name: 'Strapi', value: 4, icon: 'strapi-plain' },
    { name: 'Nest.js', value: 3, icon: 'nestjs-original' },
    { name: "UPS (US) API's", value: 4, icon: 'nodejs-plain' },
    { name: "Google Maps API's", value: 4, icon: 'google-plain' },
    { name: 'MongoDB', value: 4, icon: 'mongodb-plain' },
    { name: 'Stripe', value: 3, icon: 'postgresql-plain' },
    { name: 'MySQL', value: 4, icon: 'mysql-original' },
    { name: 'PostgreSQL', value: 3, icon: 'postgresql-plain' },
  ];

  export const devOpsSkills = [
      { name: 'Cloudiany', value: 4, icon: 'nodejs-plain' },
      { name: 'Vercel', value: 4, icon: 'vercel-original' },
      { name: 'Railway.app', value: 4, icon: 'railway-original' },
      { name: 'Git', value: 4, icon: 'git-plain' },
      { name: 'GitLab', value: 4, icon: 'gitlab-plain' },
      { name: 'AWS', value: 3, icon: 'amazonwebservices-plain-wordmark' },
    { name: 'Azure', value: 3, icon: 'azure-plain' },
    { name: 'Netlify', value: 3, icon: 'netlify-plain' },
  ];

  const workIcon = {
    iconStyle: { background: '#15803D', color: '#fff' },
};

  export const timeline = [
    {
        icon: workIcon,
        date: 'Nov 2023 - present',
        title: 'Senior Software Engineer',
        subtitle: 'Gubloo Tech Islamabad, PAK',
        desc: 'Leading the development of innovative software solutions using modern technologies. Overseeing project planning, system architecture, and team collaboration to deliver high-quality web applications. Specializing in full-stack development, code optimization, and ensuring efficient project delivery within deadlines.',
    },
    {
        icon: workIcon,
        date: 'Dec 2022 - Nov 2023',
        title: 'MERN Stack Developer',
        subtitle: 'Samsoft Technologies Islamabad, PAK',
        desc: 'Focused on full-stack development of dynamic web applications using MERN stack. Led multiple projects, including e-commerce platforms and internal office systems, ensuring seamless integration with third-party services like UPS and Stripe. Proficient in Next.js, Nest.js, Prisma, and other modern web technologies for building scalable solutions.',
    },
    {
        icon: workIcon,
        date: 'Sep 2022 - Dec 2022',
        title: 'Junior Angular Developer',
        subtitle: 'Softosol Islamabad, PAK',
        desc: 'Contributed to the development of web applications using AngularJS. Collaborated on building interactive user interfaces, integrating API endpoints, and enhancing client-side data processing. Gained hands-on experience with Angular Material and NgBootstrap for building modern, responsive front-end solutions.',
    },
    {
        icon: workIcon,
        date: 'Jan 2021 - present',
        title: 'Freelance Full-Stack Developer',
        subtitle: 'Islamabad, PAK',
        desc: 'Developed and maintained various full-stack web applications for clients using the MERN stack. Collaborated with clients to define requirements and deliver customized solutions, focusing on user experience, visual design, and efficient backend development.',
    },
];

export const reviews = [
  {
    review: "Uzair did an exceptional job bringing Rockdale Wreaths to life from scratch. His professionalism, attention to detail, and timely delivery exceeded my expectations. I couldn’t have asked for a better developer to work with!",
    name: "Michael Kelley",
    company: "Rockdale Wreaths Inc.",
  },
  {
    review: "Uzair played a pivotal role in developing Threat Defence from scratch. His expertise and commitment to quality were evident throughout the project, and the final product exceeded all expectations. Highly recommend his work!",
    name: "Anton Guzhevskiy",
    company: "ThreatDefence.",
  },
  {
    review: "Uzair’s work on Deep Lawn was outstanding. From start to finish, he showed exceptional skill and dedication, delivering a top-quality product. It was a pleasure working with him!",
    name: "Joel Northrup",
    company: "Deep Lawn.",
  },
  {
    review: "Uzair did an excellent job developing the admin dashboard for Scintillant Ventures. His work was efficient, well-organized, and exactly what we needed to streamline operations. Highly recommend his services!",
    name: "Ron Ejercito",
    company: "Scintillant Ventures.",
  },
];

export const projectData = [
  { id: 1, name: "Rockdale Wreaths", image: rockdaleReaths, url:"https://www.rockdalewreaths.com/" },
  { id: 2, name: "Threat Defence", image: threatdefence, url:"https://threatdefence.com/" },
  { id: 3, name: "Deep Lawn", image: deeplawn, hrl:"https://deeplawn.com/" },
  { id: 4, name: "Service Cart", image: servicecart, url:"https://servicecart.io/" },
  { id: 6, name: "Volt", image: volt, url:"https://volt-mu.vercel.app/" },
  { id: 7, name: "Scintillant Ventures", image: scintillant_ventures, url:"https://www.scintillantventures.com/"},
  { id: 8, name: "Qubit", image: qubitx, url:"https://qubitx.io/"}
];