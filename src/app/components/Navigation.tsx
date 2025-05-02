'use client';

import React, { useState } from 'react';
import styles from './dashboard.module.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.dashNav}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={`${styles.dashControl} h-12 w-12 flex items-center justify-center mr-3`}>
              <span className={`${styles.ledText} text-xs`}>TT</span>
            </div>
            <div>
              <div className="text-dash-dark text-xl font-bold">TURING TOOLS</div>
              <div className={styles.digitalDisplay}>
                <div className={styles.gridPattern}></div>
                <div className="flex items-center">
                  <div className={styles.warningLight}></div>
                  <div className={`${styles.ledText} ${styles.blink} text-xs`}>SYSTEM ONLINE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#services" className={styles.navButton}>
              <div className={styles.warningLight}></div>
              Services
            </a>
            <a href="#approach" className={styles.navButton}>
              <div className={styles.warningLight}></div>
              Approach
            </a>
            <a href="#about" className={styles.navButton}>
              <div className={styles.warningLight}></div>
              About
            </a>
            <a href="#contact" className={styles.navButton}>
              <div className={styles.warningLight}></div>
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button 
              className={styles.navButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-2">
            <a href="#services" className={styles.navButton} onClick={toggleMenu}>
              <div className={styles.warningLight}></div>
              Services
            </a>
            <a href="#approach" className={styles.navButton} onClick={toggleMenu}>
              <div className={styles.warningLight}></div>
              Approach
            </a>
            <a href="#about" className={styles.navButton} onClick={toggleMenu}>
              <div className={styles.warningLight}></div>
              About
            </a>
            <a href="#contact" className={styles.navButton} onClick={toggleMenu}>
              <div className={styles.warningLight}></div>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 