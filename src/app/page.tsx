'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import About from './components/About';
import Contact from './components/Contact';
import styles from './components/dashboard.module.css';

export default function Home() {
  return (
    <main className={styles.dashboard}>
      <Navigation />
      <Hero />
      <Services />
      <Approach />
      <About />
      <Contact />
    </main>
  );
}
