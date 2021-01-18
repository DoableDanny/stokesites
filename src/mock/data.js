import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'StokeSites', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Get more customers with StokeSites', // e.g: Welcome to my website
};

// NAV DATA
export const navbarData = {
  title: 'StokeSites',
  links: [
    {
      id: nanoid(),
      name: 'About',
    },
    {
      id: nanoid(),
      name: 'Our Work',
    },
    {
      id: nanoid(),
      name: 'Blog',
    },
    {
      id: nanoid(),
      name: 'Pricing',
    },
    {
      id: nanoid(),
      name: 'Contact',
    },
  ],
};

// HERO DATA
export const heroData = {
  title: 'We Will Get You More Customers and Improve Your Online Presence',
  subtitle: 'Modern websites for the takeaways of Stoke',
  cta: 'Get a Quote',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi I'm Dan, the founder of StokeSites.`,
  paragraphTwo: `Growing up, I lived all over Stoke including Longton,
  Bentilee, Meir, and now Forsbrook so I know the city's 
  takeaways well.`,
  paragraphThree: `As a web developer, I thought it would be fun to start
  a business where I could help to increase the traffic to
  takeaway's by improving their online presence, hence
  STOKESITES!`,
  resume: 'https://twitter.com/DoableDanny', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'foley-oatcakes.PNG',
    title: 'Foley Oatcakes',
    info: `"Dan is absolutely fantastic
    to work with. My website 
    was delivered perfectly in 
    good time and Dan is very 
    polite and friendly."`,
    info2: '',
    url: 'https://foleyoatcakes.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'broadway-oatcakes.PNG',
    title: 'Broadway Oatcakes',
    info: `"Dan is absolutely fantastic
    to work with. My website 
    was delivered perfectly in 
    good time and Dan is very 
    polite and friendly."`,
    info2: '',
    url: 'https://broadwayoatcakes.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// PRICING DATA
export const pricingData = {
  cards: [
    {
      id: nanoid(),
      title: 'Single Page Wesbite',
      bullet1: 'Food menu',
      bullet2: 'Custom images and text',
      bullet3: 'Custom design',
      price: 150,
    },
    {
      id: nanoid(),
      title: 'Single Page Wesbite',
      bullet1: 'Food menu',
      bullet2: 'Custom images and text',
      bullet3: 'Custom design',
      price: 150,
    },
    {
      id: nanoid(),
      title: 'Single Page Wesbite',
      bullet1: 'Food menu',
      bullet2: 'Custom images and text',
      bullet3: 'Custom design',
      price: 150,
    },
  ],
};

// CONTACT DATA
export const contactData = {
  cta: 'Ask us anything!',
  btn: 'Submit',
  email: 'doabledanny@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/DoableDanny',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/DoableDanny',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DoableDanny',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
