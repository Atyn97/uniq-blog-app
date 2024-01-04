"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { left: 1, background: "white" }
          : { right: 1, background: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={15} height={15} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={15} height={15} />
    </div>
  );
};

export default ThemeToggle;
