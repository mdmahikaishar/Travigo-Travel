import React from "react";
import { BEST_DESTINATIONS } from "@/data";
import { BiArrowToTop, } from "react-icons/bi";
import { DestinationRowItem } from "./Destinations";

export default function BestDestinations() {
  return (
    <div className="max-w-[500px] p-4 bg-white rounded-xl">
      {/* head */}
      <div className="flex items-start justify-between cursor-default">
        <div className="">
          <h3 className="font-bold text-base">Best Destination 🎉</h3>
          <span className="text-sm text-gray-400">100 Destination found</span>
        </div>

        {/* options */}
        <div className="flex items-center">
          <button className="px-3 py-2 flex items-center gap-1 text-gray-400 border-2 border-gray-200 rounded-xl">
            <BiArrowToTop />
            <span className="font-semibold text-sm">Filters</span>
          </button>
        </div>
      </div>

      {/* contents */}
      <div className="mt-4 flex flex-col gap-4">
        {BEST_DESTINATIONS.map((destination) => (
          <DestinationRowItem {...destination} key={destination.name} />
        ))}
      </div>
    </div>
  );
}
