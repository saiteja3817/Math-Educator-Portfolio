import styles from '../styles/Education.module.css';
import logo from '../assets/College-Logo.svg'; // Import the logo directly from the assets folder
import FTIIlogo from '../assets/FTIIlogo_Vector.svg'; // Import the logo directly from the assets folder
import LineDivider from './LineDivider.jsx';
const Education = () => {
  return (
    <div className={styles.eduContainer}>
      <h1 className={styles.heading}>Education</h1>
      <LineDivider/>
    <div className={styles.educationContainer}>
      <div className={styles.educationHeader}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="School Logo" className={styles.logo} />
        </div>
        <div className={styles.schoolInfo}>
          <h2 className={styles.schoolName}>Indian Institute of Information Technology Kottayam</h2>
          <p className={styles.degree}>Bachelor of Computer Science and Technology</p>
          <p className={styles.year}>2020 - 2024</p>
        </div>
      </div>
      <div className={styles.educationHeader}>
        <div className={styles.logoContainer}>
          <img src={FTIIlogo} alt="School Logo" className={styles.logo} />
        </div>
        <div className={styles.schoolInfo}>
          <h2 className={styles.schoolName}>Film and Television Institute of India Pune</h2>
          <p className={styles.degree}>MFA in Cinema with Screenwriting (Film, TV & Web Series)</p>
          <p className={styles.year}>2025 - 2027</p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Education;
