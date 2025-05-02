'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './dashboard.module.css';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mwpolpjj");

  if (state.succeeded) {
    return (
      <section id="contact" className={`${styles.dashboardSection} py-8 relative`}>
        <div className="container mx-auto px-6 relative">
          <div className={styles.dashboardPanel}>
            <div className={styles.dashHeader}>
              <div className="text-xs">SYSTEM.CONTACT</div>
              <div className={styles.dashControls}>
                <span className={`${styles.controlDot} bg-red-500`}></span>
                <span className={`${styles.controlDot} bg-yellow-500`}></span>
                <span className={`${styles.controlDot} bg-green-500`}></span>
              </div>
            </div>
            <div className={`${styles.digitalDisplay} p-6 mb-8`}>
              <h2 className={`${styles.sectionTitle} text-2xl text-center mb-6`}>
                MESSAGE TRANSMITTED
              </h2>
              <p className={`${styles.ledText} text-center`}>Thank you for your message. We will respond shortly.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={`${styles.dashboardSection} py-8 relative`}>
      <div className="container mx-auto px-6 relative">
        <div className={styles.dashboardPanel}>
          <div className={styles.dashHeader}>
            <div className="text-xs">SYSTEM.CONTACT</div>
            <div className={styles.dashControls}>
              <span className={`${styles.controlDot} bg-red-500`}></span>
              <span className={`${styles.controlDot} bg-yellow-500`}></span>
              <span className={`${styles.controlDot} bg-green-500`}></span>
            </div>
          </div>
          <div className={`${styles.digitalDisplay} p-6 mb-8`}>
            <h2 className={`${styles.sectionTitle} text-2xl text-center mb-6`}>
              INITIALIZE CONTACT
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label className={`block text-sm mb-2 ${styles.ledText}`}>NAME</label>
                <input
                  type="text"
                  name="name"
                  className={styles.digitalInput}
                  required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className={`${styles.ledText} text-red-500 text-sm`}
                />
              </div>
              <div className="mb-4">
                <label className={`block text-sm mb-2 ${styles.ledText}`}>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  className={styles.digitalInput}
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className={`${styles.ledText} text-red-500 text-sm`}
                />
              </div>
              <div className="mb-4">
                <label className={`block text-sm mb-2 ${styles.ledText}`}>MESSAGE</label>
                <textarea
                  name="message"
                  className={`${styles.digitalInput} h-32`}
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className={`${styles.ledText} text-red-500 text-sm`}
                />
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className={styles.digitalBtn}
                  disabled={state.submitting}
                >
                  <div className={styles.warningLight}></div>
                  {state.submitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 