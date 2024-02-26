import React from "react";

import style from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={style.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={style.image}
      />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={style.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={style.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a target="_blank" href={source} className={style.linkbtn}>
          Source
        </a>
      </div>
    </div>
  );
};
