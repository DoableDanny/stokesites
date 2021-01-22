import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'StokeSites', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Get more customers with StokeSites', // e.g: Welcome to my website
};

// NAV DATA
export const navbarData = {
  title: 'StokeySites',
  links: [
    {
      id: nanoid(),
      name: 'About',
      to: '#about',
    },
    {
      id: nanoid(),
      name: 'Our Work',
      to: '#projects',
    },
    // {
    //   id: nanoid(),
    //   name: 'Blog',
    //   to: '#blog',
    // },
    {
      id: nanoid(),
      name: 'Pricing',
      to: '#pricing',
    },
    {
      id: nanoid(),
      name: 'Contact',
      to: '#contact',
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
  resume: '', // if no resume, the button will not show up
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
      title: '3 Page Website',
      bullet1: 'Food menu',
      bullet2: 'Custom images and text',
      bullet3: 'Custom design',
      price: 350,
    },
    {
      id: nanoid(),
      title: 'Online Ordering Website',
      bullet1: 'Food menu',
      bullet2: 'Custom images and text',
      bullet3: 'Custom design',
      price: 500,
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
      name: 'facebook',
      url: 'https://www.facebook.com/StokeySites-103824255046116',
    },
    {
      id: nanoid(),
      name: 'google',
      url: 'https://g.page/StokeySites?gm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
