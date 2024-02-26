import React from "react";

import style from "./Skill.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skill = () => {
  return (
    <section className={style.container} id="skill">
      <h2 className={style.title}>Skills</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={style.skill}>
                <div className={style.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
