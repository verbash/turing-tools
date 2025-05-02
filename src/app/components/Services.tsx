'use client';

import React from 'react';
import styles from './dashboard.module.css';

const services = [
  {
    title: 'WEB_DEV.SYS',
    icon: 'fa-laptop-code',
    description: 'Responsive, performance-optimized websites and web applications.',
    skills: [
      { name: 'REACT', level: 90 },
      { name: 'TYPESCRIPT', level: 85 },
      { name: 'PYTHON', level: 80 },
    ],
  },
  {
    title: 'MOBILE_DEV.APP',
    icon: 'fa-mobile-alt',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    skills: [
      { name: 'REACT NATIVE', level: 92 },
      { name: 'CAPACITOR', level: 88 },
      { name: 'IOS/ANDROID', level: 85 },
    ],
  },
  {
    title: 'AI_INTEGRATION.EXE',
    icon: 'fa-brain',
    description: 'Advanced AI tools integration to enhance your applications.',
    skills: [
      { name: 'CLAUDE MCP', level: 95 },
      { name: 'CURSOR', level: 90 },
      { name: 'AI APIs', level: 88 },
    ],
  },
  {
    title: 'CLOUD_SOLUTIONS.NET',
    icon: 'fa-cloud',
    description: 'Robust cloud infrastructure and deployment ensuring scalability.',
    skills: [
      { name: 'AWS', level: 87 },
      { name: 'GCP', level: 85 },
      { name: 'ARCHITECTURE', level: 90 },
    ],
  },
  {
    title: 'FULL_STACK.SYS',
    icon: 'fa-layer-group',
    description: 'End-to-end application development with seamless integration.',
    skills: [
      { name: 'NODE.JS', level: 89 },
      { name: 'DJANGO', level: 83 },
      { name: 'REDUX', level: 86 },
    ],
  },
  {
    title: 'UX_UI_DESIGN.GFX',
    icon: 'fa-paint-brush',
    description: 'User-centric design approach ensuring intuitive interfaces.',
    skills: [
      { name: 'UI/UX', level: 92 },
      { name: 'CSS/SASS', level: 87 },
      { name: 'TAILWIND', level: 90 },
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={`${styles.dashboardSection} py-8 relative`}>
      <div className="container mx-auto px-6 relative">
        <div className={styles.dashboardPanel}>
          <div className={styles.dashHeader}>
            <div className="text-xs">SYSTEM.MODULES</div>
            <div className={styles.dashControls}>
              <span className={`${styles.controlDot} bg-red-500`}></span>
              <span className={`${styles.controlDot} bg-yellow-500`}></span>
              <span className={`${styles.controlDot} bg-green-500`}></span>
            </div>
          </div>
          <div className={`${styles.digitalDisplay} p-6 mb-8`}>
            <h2 className={`${styles.sectionTitle} text-2xl text-center mb-6`}>
              AVAILABLE SERVICES
            </h2>
            {/* <p className={`${styles.ledText} text-center mb-4`}>
              SELECT A SERVICE MODULE TO LEARN MORE
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.dashHeader}>
                  <div className="text-xs">{service.title}</div>
                  <div className={styles.dashControls}>
                    <span className={`${styles.controlDot} bg-green-500`}></span>
                  </div>
                </div>
                <div className={styles.serviceDisplay}>
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 flex items-center justify-center">
                      <i className={`fas ${service.icon} text-3xl text-green-500`}></i>
                    </div>
                  </div>
                  <p className={`${styles.ledText} mb-4 text-center`}>
                    {service.description}
                  </p>
                </div>
                {service.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between mb-2">
                    <span className={`${styles.ledText} text-xs`}>{skill.name}</span>
                    <div className={`${styles.gaugeContainer} w-1/2`}>
                      <div
                        className={styles.gaugeFill}
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 