import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Pricing from './Pricing/Pricing';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  pricingData,
  footerData,
  navbarData,
} from '../mock/data';

function App() {
  const [navbar, setNavbar] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavbar({ ...navbarData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setPricing({ ...pricingData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ navbar, hero, about, projects, pricing, contact, footer }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
