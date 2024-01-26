import React from "react";
import { USER_IMG } from "@/data";
import styles from "@/styles/styles";
import Scheduls from "./Schedules";
import User from "./User";

export default function RightSidebar() {
  return (
    <div className="">
      <div className="pt-8 px-4 pb-4 h-screen sticky top-0 flex flex-col md:gap-4 gap-6">
        <div className={styles.head}>
          <User img={USER_IMG} name="Md Mahi Kaishar" bio="Travier Enthsiast" />
        </div>

        <Scheduls />
      </div>
    </div>
  );
}
