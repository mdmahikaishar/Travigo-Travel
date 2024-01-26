import { BANNER_IMG } from "@/data";
import React from "react";

export default function JoinBanner() {
  return (
    <div className="p-4 hidden md:flex flex-col items-center gap-2 bg-gray-900 rounded-xl">
      <img src={BANNER_IMG} alt="" className="w-full aspect-square" />
      <h3 className="mt-4 text-white font-semibold">{"Let's Explore The Beauty"}</h3>
      <span className="text-sm text-gray-400">Get special offers & news</span>
      <button className="w-full py-2 text-sm font-semibold bg-green-500 text-white rounded-xl">
        Join Now
      </button>
    </div>
  );
}
