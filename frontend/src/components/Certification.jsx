import React from 'react';
import styles from '../styles/Certification.module.css';
import logo from '../assets/gnk.svg'; // Import the issuer logo from the assets folder
import LineDivider from './LineDivider';
const Certification = () => {
  return (
    <div className={styles.certificationContainer}>
      <h1 className={styles.heading}>Experience</h1>
      <LineDivider/>
      <div className={styles.certificationHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Google Logo" className={styles.logo} />
        </div>
        <div className={styles.certificationInfo}>
          <h2 className={styles.certificationTitle}>GNK EDUCATIONAL INSTITUTE</h2>
          <p className={styles.issueDate}>Maths Lecturer for EAMCET, POLYCET</p>
          <p className={styles.year}>2022,2023 [Crash Course Batches]</p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
