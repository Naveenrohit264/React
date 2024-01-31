import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Plan4.module.css';

const Plan4 = () => {
  return (
    <div className={styles.container}>
      <h1>Plan 4</h1>
      <div className={styles.cardsContainer}>
        {/* Plan 4 Card */}
        <div className={styles.planCard}>
          {/* Plan 4 content */}
          <h2>Save 43%</h2>
          <p>Telugu Annual Plan</p>
          <p>Full HD (1080p) · Stereo · Telugu Movies & Web series · 1 Year</p>
          <div className={styles.planDetails}>
            <p className={styles.price}>INR 399 / year</p>
            <br />
         
            <Link to="/pay/399" className={styles.subscribeButton}>
              Proceed to Payment
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan4;