'use client';

import React from 'react';
import styles from './dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardPanel}>
        <div className={styles.dashboardDial}>
          <div className={styles.dialMarkers}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={styles.dialMarker}
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
          </div>
          <div className={styles.dialNeedle} />
        </div>
        
        <div className={styles.digitalDisplay}>
          <div className={styles.gridPattern} />
          <div className={styles.ledText}>SYSTEM READY</div>
        </div>

        <div className={styles.statusIndicator}>
          <span className={styles.statusLabel}>STATUS</span>
          <div className={styles.warningLight} />
        </div>

        <div className={styles.gaugeContainer}>
          <div className={styles.gaugeFill} style={{ width: '75%' }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 