import { useState } from "react";
import styles from "../styles/Projects.module.css";
import project1Image from "../assets/iit.jpg";
import project2Image from "../assets/eamcet.jpg";
import project3Image from "../assets/satF.png";
import project4Image from "../assets/et.png";
import project5Image from "../assets/shool.jpg";

import LineDivider from "./LineDivider";
import Modal from "./Modal.jsx";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "IIT JEE FOUNDATION",
      image: project1Image,
      modalContent: (
        <>
          <h3 className={styles.modalSubHeading}>About IIT JEE Course</h3>
          <ul>
            <li>Concept building from basics to advanced.</li>
            <li>High-level problem-solving strategies.</li>
            <li>Weekly mock tests & analysis.</li>
          </ul>

          <h3 className={styles.modalSubHeading}>Who Is This For?</h3>
          <ul>
            <li>Students preparing for IIT-JEE foundation (8–10th).</li>
            <li>Anyone seeking strong conceptual grounding.</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Maths For EAMCET, ECET",
      image: project2Image,
      modalContent: (
        <>
          <h3 className={styles.modalSubHeading}>About EAMCET / ECET Course</h3>
          <ul>
            <li>Full syllabus coverage with shortcuts.</li>
            <li>Topic-wise practice sets.</li>
            <li>Exam-oriented teaching.</li>
          </ul>

          <h3 className={styles.modalSubHeading}>Who Is This For?</h3>
          <ul>
            <li>EAMCET & ECET aspirants.</li>
            <li>Students wanting exam-focused maths training.</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: "Maths For SAT",
      image: project3Image,
      modalContent: (
        <>
          <h3 className={styles.modalSubHeading}>SAT Mathematics Course</h3>
          <ul>
            <li>Focus on Algebra, Arithmetic, Word Problems.</li>
            <li>Timed practice for improving score.</li>
            <li>Strategies to solve quickly & accurately.</li>
          </ul>

          <h3 className={styles.modalSubHeading}>Who Is This For?</h3>
          <ul>
            <li>International SAT aspirants.</li>
            <li>Students aiming 700+ in SAT Math.</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "Maths for 11th , 12th Boards",
      image: project4Image,
      modalContent: (
        <>
          <h3 className={styles.modalSubHeading}>Intermediate Maths Course</h3>
          <ul>
            <li>Boards-oriented syllabus explanation.</li>
            <li>NCERT + Additional solving.</li>
            <li>Derivations, proofs, and application problems.</li>
          </ul>

          <h3 className={styles.modalSubHeading}>Who Is This For?</h3>
          <ul>
            <li>11th & 12th students (CBSE/State).</li>
            <li>Anyone wanting strong conceptual clarity.</li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: "Maths for <= 10th Boards",
      image: project5Image,
      modalContent: (
        <>
          <h3 className={styles.modalSubHeading}>Mathematics for School Students</h3>
          <ul>
            <li>Easy explanations with real-life examples.</li>
            <li>Step-by-step problem solving.</li>
            <li>Worksheets & revision tests.</li>
          </ul>

          <h3 className={styles.modalSubHeading}>Who Is This For?</h3>
          <ul>
            <li>Students from 6th to 10th.</li>
            <li>Beginners who need extra support.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className={styles.techStackContainer}>
      <h1 className={styles.heading}>Services</h1>
      <LineDivider />

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.experienceDetailsContainer}>
          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <div key={project.id} className={`${styles.detailsContainer} ${styles.colorContainer}`}>
                <div className={styles.articleContainer}>
                  <img src={project.image} alt={project.title} className={styles.projectImg} />
                </div>

                <h2 className={styles.projectTitle}>{project.title}</h2>

                <div className={styles.btnContainer}>
                  <button
                    className={`${styles.btn} ${styles.projectBtn}`}
                    onClick={() => openModal(project)}
                  >
                    Course Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3 className={styles.modalTitle}>{selectedProject.title}</h3>

          <div className={styles.modalProblemDetails}>
            <div className={styles.modalProblemItem}>
              {selectedProject.modalContent}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;

