import React from "react";
import styles from "@/styles/styles";
import { IconType } from "react-icons";

export default function SidebarItem(props: { active: boolean, icon: IconType, name: string }) {
  return (
    <div className={`${styles.sidebar.menu} ${props.active ? styles.sidebar.menuActive : styles.sidebar.menuInActive}`}>
      <props.icon className={styles.sidebar.menuIcon} />
      <span className={styles.sidebar.menuText}>{props.name}</span>
    </div>
  );
}
