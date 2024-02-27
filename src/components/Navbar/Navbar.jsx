import React, { useState } from "react";

import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";
import { Link, animateScroll as scrollSpy } from "react-scroll";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <a className={style.title} href="/">
        LOGO
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="skill">
              Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="experience">
              Experiences
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
