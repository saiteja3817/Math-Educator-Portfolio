import './App.css';
import HeroImageMath from './components/hero-image-updated-maths.tsx';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import TechStack from './components/TechStack.jsx';
import Education from './components/Education.jsx';
import Certification from './components/Certification.jsx';
import GetInTouch from './components/GetInTouch.jsx';
import Projects from './components/Projects.jsx';

function App() {

  const [showCursor, setShowCursor] = useState(true); // State to manage cursor visibility

  useEffect(() => {
    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set('.cursor', {
        x: mouseX,
        y: mouseY
      });

      gsap.to('.shape', {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    };

    if (showCursor) {
      // Add event listener when the cursor should be shown
      document.body.addEventListener('mousemove', handleMouseMove);
    } else {
      // Remove event listener when the cursor is hidden
      document.body.removeEventListener('mousemove', handleMouseMove);
    }

    // Clean up the event listener on unmount
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showCursor]); // Re-run when showCursor state changes

  // Handlers to hide/show the custom cursor
  const handleMouseEnter = () => setShowCursor(false); // Hide cursor
  const handleMouseLeave = () => setShowCursor(true);  // Show cursor

  return (
    <div>
      <div className="Hero">
        {/* Spotlight Cursor - Only render when showCursor is true */}
        {showCursor && <div className="cursor"></div>}
        
        {/* Shapes for Spotlight Effect */}
        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h1 className="small-text">Hello, I'm Sai Teja</h1>
          <h2 className="big-text">Math Educator</h2>
        </div>

        {/* SVG/Image Component */}
        <HeroImageMath />
      </div>

      {/* Components that disable the custom cursor */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Education />
        {/* <TechStack /> */}
        <Certification />
        <Projects />
        <GetInTouch />
      </div>
    </div>
  );
}

export default App;
