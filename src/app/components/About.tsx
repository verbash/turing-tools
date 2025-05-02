'use client';

import React from 'react';
import styles from './dashboard.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles.dashboardSection} py-8 relative`}>
      <div className="container mx-auto px-6 relative">
        <div className={styles.dashboardPanel}>
          <div className={styles.dashHeader}>
            <div className="text-xs">SYSTEM.ABOUT</div>
            <div className={styles.dashControls}>
              <span className={`${styles.controlDot} bg-red-500`}></span>
              <span className={`${styles.controlDot} bg-yellow-500`}></span>
              <span className={`${styles.controlDot} bg-green-500`}></span>
            </div>
          </div>
          <div className={`${styles.digitalDisplay} p-6 mb-8`}>
            <h2 className={`${styles.sectionTitle} text-2xl text-center mb-8`}>
              ABOUT TURING TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${styles.serviceDisplay} p-6`}>
                <h3 className={`${styles.sectionTitle} text-xl text-center mb-6`}>
                  DAVID LIABRAATEN
                </h3>
                <p className={`${styles.ledText} text-center mb-6 text-amber-400`}>
                  Founder & Full Stack Developer
                </p>
                <p className={`${styles.ledText} text-gray-300`}>
                  David LiaBraaten is a Full Stack Developer with extensive experience crafting responsive, user-centric web and mobile solutions. He has built applications for startups and established businesses, always focusing on solving complex problems with elegant solutions.
                </p>
                <p className={`${styles.ledText} mt-4 text-gray-300`}>
                  His background includes leading development for Android video applications, building ecommerce platforms, and implementing AI tools to enhance digital experiences.
                </p>
              </div>
              <div className={`${styles.serviceDisplay} p-6`}>
                <h3 className={`${styles.sectionTitle} text-xl text-center mb-6`}>
                  OUR MISSION
                </h3>
                <p className={`${styles.ledText} text-gray-300`}>
                  At Turing Tools, we approach every project with the precision of a craftsman and the innovation of a pioneer. Our development process combines technical excellence with creative problem-solving to deliver solutions that exceed expectations.
                </p>
                <p className={`${styles.ledText} mt-4 text-gray-300`}>
                  We believe in transparent communication, iterative development, and a deep understanding of your business needs. This ensures that every line of code serves a purpose and every feature delivers value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 