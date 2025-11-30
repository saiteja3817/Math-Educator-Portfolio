// Import styles
import styles from '../styles/TechStack.module.css';
import LineDivider from './LineDivider.jsx';

// Import SVGs
import ReactLogo from '../assets/React.svg';
import NodeLogo from '../assets/Node.js.svg';
import JSLogo from '../assets/JavaScript.svg';
import HTMLLogo from '../assets/HTML5.svg';
import CSSLogo from '../assets/CSS3.svg';
import BootstrapLogo from '../assets/Bootstrap.svg';
import CPlusPlusLogo from '../assets/CPlusPlus.svg';
import ElementorLogo from '../assets/elementor.svg';
import FigmaLogo from '../assets/Figma.svg';
import GitLogo from '../assets/Git.svg';
import MongoDBLogo from '../assets/MongoDB.svg';
import PostmanLogo from '../assets/Postman.svg';
import SassLogo from '../assets/Sass.svg';
import TailwindCSSLogo from '../assets/Tailwind-CSS.svg';
import WordpressLogo from '../assets/wordpress.svg';
// Add more SVG imports as needed

const TechStack = () => {
  return (
    <div className={styles.techStackContainer}>
      <h1 className={styles.heading}>Design / Tech Stack</h1>
      <LineDivider/>
      <div className={styles.svgContainer}>
        <img src={HTMLLogo} alt="HTML" />
        <img src={CSSLogo} alt="CSS" />
        <img src={JSLogo} alt="JavaScript" />
        <img src={ReactLogo} alt="React" />
        <img src={NodeLogo} alt="Node.js" />
        <img src={MongoDBLogo} alt="MongoDB" />
        <img src={PostmanLogo} alt="Postman" />
        <img src={TailwindCSSLogo} alt="TailwindCSS" />
        <img src={SassLogo} alt="Sass" />
        <img src={BootstrapLogo} alt="Bootstrap" />
        <img src={WordpressLogo} alt="Wordpress" />
        <img src={ElementorLogo} alt="Elementor" />
        <img src={FigmaLogo} alt="Figma" />
        <img src={GitLogo} alt="Git" />
        <img src={CPlusPlusLogo} alt="CPlusPlus" />
        {/* Add more SVGs as necessary */}
      </div>
    </div>
  );
};

export default TechStack;

