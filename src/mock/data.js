import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jay Sueno | Data Scientist | Surfer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jay Sueno',
  subtitle: 'Data Scientist & Soul Surfer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:
    'A surfing data scientist you say? Wecome to my world. I am passionate about the possibilities of AI and the grandeaur of Mother Nature.',
  paragraphTwo:
    'Join me on this journey of growth and grit as a data scientist, investor, writer, and waterman.',
  paragraphThree:
    'Find me on ClubHouse (@jaysueno), Twitter (@therealjaysueno), and LinkedIn (/jaysueno).',
  resume:
    'https://docs.google.com/document/d/1VnX78TtlJgy8U0iCmPOLcAt62UnenilIVJE5A_z3l1U/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'copy_wordcloud.png',
    title: 'Surfline Keyword and Sentiment Analysis',
    info:
      'In this project I wanted to see what kinds of words Surfline uses in thier news and blog posts. Moreover, is there a way to visualize the findings and provide some insights about how they are positioning the brand in SEO?',
    info2: '',
    url: '',
    repo: 'https://github.com/jaysueno/webscraping_surfline_blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'citibike1.jpg',
    title: 'COVID Bike Ridership Analysis',
    info:
      'Tableau project to visualize how Jersey City biking patterns have changed in the time of Covid19.',
    info2: '',
    url:
      'https://public.tableau.com/profile/jaysueno#!/vizhome/JerseyCityCitiBikeAnalysis2020/Story1',
    repo: 'https://github.com/jaysueno/JerseyCity-Covid-CitiBike-Tableau-Viz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "LET'S CHAT",
  btn: 'EMAIL ME',
  email: 'jay.sueno@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/therealjaysueno',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/jaysueno',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jaysueno',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/jaysueno',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
