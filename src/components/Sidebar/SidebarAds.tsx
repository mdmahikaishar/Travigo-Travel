import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { AD_IMG } from "@/data";

export default function SidebarAds() {
  return (
    <div className="hidden md:grid flex-none w-full apsect-square relative rounded-xl overflow-hidden shadow-md">
      <img className="w-full h-full object-cover" src={AD_IMG} alt="ads" />
      <button className="w-10 aspect-square absolute left-4 bottom-6 grid place-items-center bg-orange-500 text-white rounded-full shadow-md shadow-orange-500">
        <BiArrowToRight className="text-xl" />
      </button>
    </div>
  );
}
