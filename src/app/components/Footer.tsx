import React from 'react';
import styles from './footer.module.css';

const links = [
  { href: 'https://davidliabraaten.com', icon: 'fas fa-globe', label: 'Website' },
  { href: 'https://www.linkedin.com/in/david-liabraaten', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/davidliabraaten', icon: 'fab fa-facebook', label: 'Facebook' },
  { href: 'https://github.com/verbash', icon: 'fab fa-github', label: 'GitHub' },
];

const Footer = () => (
  <footer className={styles.footerDashboard}>
    <div className={styles.gridOverlay} />
    <div className={styles.ledPanel}>
      <span className={styles.ledText}>CONNECT</span>
      <div className={styles.socialRow}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={styles.iconBtn}
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer; 