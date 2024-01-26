import React from "react";
import { SIDEBAR_MENUS } from "@/data";
import styles from "@/styles/styles";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import SidebarAds from "./SidebarAds";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="row-span-2 xl:row-span-1">
      <div className="pt-4 px-2 pb-2 md:pt-8 md:px-4 md:pb-4 h-screen sticky top-0 flex flex-col gap-4">
        {/* sidebarLogo */}
        <div className={styles.head}>
          <Link className="flex items-center justify-center" href="/">
            <span className="hidden md:block text-2xl font-bold">Travigo</span>
          </Link>
        </div>

        {/* sidebarMenus */}
        <div className="flex-grow flex flex-col gap-y-4 md:gap-y-0">
          {SIDEBAR_MENUS.map((menu) => (
            <SidebarItem {...menu} key={menu.name} />
          ))}
        </div>

        <SidebarAds />

        {/* sidebarLogout */}
        <div className={`flex-none ${styles.sidebar.menu} ${styles.sidebar.menuLogout}`}>
          <BiLogOut className={styles.sidebar.menuIcon} />
          <span className={styles.sidebar.menuText}>log out</span>
        </div>
      </div>
    </div>
  );
}
