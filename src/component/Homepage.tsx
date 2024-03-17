import React from 'react'
import Header from './lab1/Header';
import HeadSection from './lab1/HeadSection';
import CardLatest from './lab1/CardLatest';
import CardPanel from './lab1/CardPanel';
import Section from './lab1/Section';
import Footer from './lab1/Footer';

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeadSection />
      <CardLatest />
      <CardPanel />
      <Section />
      <Footer />
    </div>
  );
}

export default Homepage