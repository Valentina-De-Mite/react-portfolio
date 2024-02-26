import React from "react";

import style from "./Experience.module.css";
import experiences from "../../data/experiences.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={style.container} id="experience">
      <h2 className={style.title}>Experiences</h2>

      <div className={style.content}>
        <img
          src={getImageUrl("experiences/avatar-circle.png")}
          alt="Me reading"
          className={style.experienceImage}
        />
        <ul className={style.experiences}>
          {experiences.map((experienceItem, id) => {
            return (
              <li key={id} className={style.experienceItem}>
                <img
                  src={getImageUrl(experienceItem.imageSrc)}
                  alt={`${experienceItem.organisation} Logo`}
                />
                <div className={style.experienceItemDetails}>
                  <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
