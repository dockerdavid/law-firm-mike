import { GoLaw } from "react-icons/go";
import { FaFlag } from "react-icons/fa";

import styles from "./AboutMe.module.css";

const AboutMeComponent = () => {
  return (
    <div className={styles.container} id="about-me">
      <div className={styles.profileContainer}>
        <div className={styles.title}>
          <span>About Company</span>
          <span>Preserving relationships are the basis of success</span>
        </div>
        <div className={styles.sides}>
          <div className={styles.leftContainer}>
            <div className={styles.imgTitleContainer}>
              <img className={styles.image} src="/about-me/me.jpg" alt="me" />
              <div className={styles.projects}>
                <span>1500</span>
                <span>Project Completed</span>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.description}>
              <div className={styles.advice}>
                <GoLaw />
                <span>Legal Advice</span>
                <span>
                  Expert legal guidance tailored to your unique needs and
                  circumstances.
                </span>
              </div>
              <div className={styles.mission}>
                <FaFlag />
                <span>Our Mission</span>
                <span>
                  Providing expert legal representation with integrity,
                  compassion, and dedication.
                </span>
              </div>
            </div>
            <div className={styles.resume}>
              <span>
                Experienced lawyers committed to delivering personalized legal
                services. We handle diverse legal issues with professionalism
                and a client-focused approach, aiming for the best outcomes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
