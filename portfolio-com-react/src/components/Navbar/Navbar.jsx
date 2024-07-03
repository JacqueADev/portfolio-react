import React from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#experiencia">Experiência</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
