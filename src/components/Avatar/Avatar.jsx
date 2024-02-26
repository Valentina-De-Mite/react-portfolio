import React from "react";
import { getImageUrl } from "../../utils";

import style from "./Avatar.module.css";

export const Avatar = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h3 className={style.title}>Hi, I'm Valentina</h3>
        <p className={style.description}>
          I'm a Junior Full Stack Web Developer.
          <br />
          Reach out if you'd like to learn more about me!
        </p>

        <a
          href="mailto:valentina.webdev@gmail.com"
          className={style.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("avatar/avatar-circle-close-photoaidcom-cropped.jpg")}
        alt="Me Avatar"
        className={style.avatarImg}
      />

      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
    </section>
  );
};
