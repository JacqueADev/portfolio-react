import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Personagem na frente do laptop" className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvimento Frontend</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                repellat doloremque nulla temporibus.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvimento Backend</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                repellat doloremque nulla temporibus.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                repellat doloremque nulla temporibus.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
