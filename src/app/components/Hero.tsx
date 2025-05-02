'use client';

import React from 'react';
import styles from './dashboard.module.css';

const Hero: React.FC = () => {
  return (
    <header className={`${styles.dashboardSection} py-8 relative`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative">
        <div className={`${styles.dashboardPanel} w-full md:w-1/3 mb-12 md:mb-0 p-6`}>
          <div className={styles.dashHeader}>
            <div className="text-xs">SYSTEM.BRIEFING</div>
            <div className={styles.dashControls}>
              <span className={`${styles.controlDot} bg-red-500`}></span>
              <span className={`${styles.controlDot} bg-yellow-500`}></span>
              <span className={`${styles.controlDot} bg-green-500`}></span>
            </div>
          </div>
          <div className={`${styles.digitalDisplay} p-6 mb-6`}>
            <h1 className={`${styles.sectionTitle} text-lg sm:text-2xl mb-6 leading-relaxed`}>
              INTELLIGENT DIGITAL SOLUTIONS
            </h1>
            <div className="mb-4 flex">
              <div className={styles.warningLight}></div>
              <div className={styles.ledText}>
                CRAFTING EXCEPTIONAL WEB AND MOBILE APPLICATIONS
              </div>
            </div>
            <div className="mb-4 flex">
              <div className={styles.warningLight}></div>
              <div className={styles.ledText}>
                SOLVING COMPLEX PROBLEMS WITH ELEGANT SIMPLICITY
              </div>
            </div>
            <div className="mb-4 flex">
              <div className={styles.warningLight}></div>
              <div className={styles.ledText}>
                FULL STACK DEVELOPMENT WITH CUTTING-EDGE TECH
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className={styles.statusIndicator}>
              <span className={styles.statusLabel}>SYSTEM STATUS:</span>
              <div className={styles.gaugeContainer}>
                <div className={styles.gaugeFill} style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className={styles.dashboardDial}>
              <div className={styles.dialMarkers}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={styles.dialMarker}
                    style={{ transform: `rotate(${i * 45}deg)` }}
                  />
                ))}
              </div>
              <div className={styles.dialNeedle}></div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#contact" className={styles.digitalBtn}>
              <div className={styles.warningLight}></div>
              INITIALIZE CONTACT
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-8 lg:pl-16 flex justify-center h-full">
          <div className={`${styles.dashboardPanel} p-6 w-full`}>
            <div className={`${styles.digitalDisplay} p-4 aspect-video w-full min-h-[350px]`}>
              <div className="relative h-full">
                <div className="flex flex-col h-full justify-center items-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute" style={{ left: '-40px', top: '-30px' }}>
                        <div className="h-4 w-16 bg-green-500 mb-1"></div>
                        <div className="h-16 w-4 bg-green-500 ml-5"></div>
                      </div>
                      <div>
                        <div className="h-4 w-16 bg-green-500 mb-1"></div>
                        <div className="h-16 w-4 bg-green-500 ml-5"></div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.digitalDisplay} p-2 w-3/4 text-center`}>
                    <span className={`${styles.ledText} text-xl`}>TURING TOOLS</span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className={styles.statusIndicator}>
                      <div className={`${styles.statusLight} ${styles.lightGreen}`}></div>
                      <span className={styles.statusLabel}>CPU</span>
                    </div>
                    <div className={styles.statusIndicator}>
                      <div className={`${styles.statusLight} ${styles.lightAmber}`}></div>
                      <span className={styles.statusLabel}>MEMORY</span>
                    </div>
                    <div className={styles.statusIndicator}>
                      <div className={`${styles.statusLight} ${styles.lightGreen}`}></div>
                      <span className={styles.statusLabel}>NETWORK</span>
                    </div>
                    <div className={styles.statusIndicator}>
                      <div className={`${styles.statusLight} ${styles.lightGreen} ${styles.blink}`}></div>
                      <span className={styles.statusLabel}>ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;