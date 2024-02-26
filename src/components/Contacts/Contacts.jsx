import React from "react";

import style from "./Contacts.module.css";
import { getImageUrl } from "../../utils";

export const Contacts = () => {
  return (
    <footer id="contact" className={style.container}>
      <div className={style.text}>
        <h3>Contact</h3>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contacts/emailIcon.png")} alt="Email icon" />
          <a href="mailto:valentina.webdev@email.com">
            valentina.webdev@gmail.com
          </a>
        </li>
        <li className={style.link}>
          <img
            src={getImageUrl("contacts/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/valentina-de-mite-a86497238/"
          >
            https://www.linkedin.com/in/valentina-de-mite/
          </a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contacts/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://github.com/Valentina-De-Mite">
            github.com/Valentina-De-Mite
          </a>
        </li>
      </ul>
    </footer>
  );
};
