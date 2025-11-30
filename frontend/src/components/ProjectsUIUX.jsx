import { useState } from "react";
import styles from "../styles/Projects.module.css";
import project1Image from "../assets/DaysGoneBy.png";
import project2Image from "../assets/SuccessPublication.png";
import LineDivider from "./LineDivider";
import Modal from "./Modal.jsx";
import CopyClipboard from "./CopyClipboard.jsx";
import CopyClipboardD from "./CopyClipboardD.jsx";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Track the selected project

  const openModal = (project) => {
    setIsModalOpen(true);
    setSelectedProject(project); // Store the selected project when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Clear the selected project when closing the modal
  };

  const projects = [
    {
      id: 1,
      title: "Days Gone By",
      github: "https://daysgoneby.onrender.com/uiux",
      demo: "https://daysgoneby.onrender.com",
      image: project1Image,
    },
    {
      id: 2,
      title: "Success Publications",
      github: "https://www.successpublication.in/uiux",
      demo: "https://www.successpublication.in/",
      image: project2Image,
    },
  ];

  return (
    <div className={styles.techStackContainer}>
      <h1 className={styles.heading}>Projects</h1>
      <LineDivider />
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.experienceDetailsContainer}>
          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${styles.detailsContainer} ${styles.colorContainer}`}
              >
                <div className={styles.articleContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImg}
                  />
                </div>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <div className={styles.btnContainer}>
                  <button
                    className={`${styles.btn} ${styles.projectBtn}`}
                    onClick={() => (window.location.href = project.github)}
                  >
                    Process
                  </button>
                  <button
                    className={`${styles.btn} ${styles.projectBtn}`}
                    onClick={() => openModal(project)} // Pass the entire project object to openModal
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedProject && (
       <Modal isOpen={isModalOpen} onClose={closeModal}>
  <h3 className={styles.modalTitle}>Course Details</h3>

  <div className={styles.modalProblemDetails}>
    <div className={styles.modalProblemItem}>
      <h3 className={styles.modalSubHeading}>What You Will Learn</h3>
      <ul className={styles.modalSubHeading}>
        <li>Understand core concepts through step-by-step lessons.</li>
        <li>Hands-on tasks designed for practical implementation.</li>
        <li>Learn using real-world examples and interactive modules.</li>
      </ul>

      <h3 className={styles.modalSubHeading}>Course Requirements</h3>
      <ul className={styles.modalSubHeading}>
        <li>No prior experience required—beginner friendly.</li>
        <li>A laptop or desktop with internet connection.</li>
        <li>Basic understanding of using a browser.</li>
      </ul>

      <h3 className={styles.modalSubHeading}>Who This Course Is For</h3>
      <ul className={styles.modalSubHeading}>
        <li>Students looking to expand their technical knowledge.</li>
        <li>Professionals wanting skill upgradation.</li>
        <li>Anyone curious about learning something new.</li>
      </ul>
    </div>
  </div>
</Modal>

      )}
    </div>
  );
};

export default Projects;
