import styles from "@/styles/styles";
import React from "react";
import { BiBell } from "react-icons/bi";
import NavButton from "./NavButton";
import Searchbar from "./Searchbar";

export default function Navbar({ name }: { name: string }) {
  return (
    <div className={styles.head}>
      {/* mainHeader */}
      <div className="flex items-start justify-between">
        {/* mainWelcome */}
        <div className="cursor-default">
          <h3 className="text-xl md:text-2xl font-bold">Hello, {name}! 👋</h3>
          <span className="text-xs md:text-sm text-gray-500">
            Welcome back and explore the world.
          </span>
        </div>

        {/* mainNavbar */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <Searchbar />
          <NavButton icon={BiBell} number={2} />
        </div>
      </div>
    </div>
  );
}
