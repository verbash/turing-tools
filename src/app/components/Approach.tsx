'use client';

import React from 'react';
import styles from './dashboard.module.css';

const approaches = [
  {
    title: 'INNOVATION',
    icon: 'fa-lightbulb',
    description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.',
  },
  {
    title: 'PRECISION',
    icon: 'fa-cogs',
    description: 'Every line of code is crafted with attention to detail and best practices.',
  },
  {
    title: 'COLLABORATION',
    icon: 'fa-users',
    description: 'We work closely with clients to ensure their vision becomes reality.',
  },
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className={`${styles.dashboardSection} py-16 relative`}>
      <div className="container mx-auto px-6 relative">
        <div className={styles.dashboardPanel}>
          <div className={styles.dashHeader}>
            <div className="text-xs">SYSTEM.METHODOLOGY</div>
            <div className={styles.dashControls}>
              <span className={`${styles.controlDot} bg-red-500`}></span>
              <span className={`${styles.controlDot} bg-yellow-500`}></span>
              <span className={`${styles.controlDot} bg-green-500`}></span>
            </div>
          </div>
          <div className={`${styles.digitalDisplay} p-6 mb-8`}>
            <h2 className={`${styles.sectionTitle} text-2xl text-center mb-6`}>
              APPROACH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approaches.map((approach, index) => (
                <div key={index} className={styles.serviceDisplay}>
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 flex items-center justify-center">
                      <i className={`fas ${approach.icon} text-3xl text-green-500`}></i>
                    </div>
                  </div>
                  <h3 className={`${styles.sectionTitle} text-center mb-4`}>
                    {approach.title}
                  </h3>
                  <p className={`${styles.ledText} text-center`}>
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach; 