import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
import ScheduleFriend from "./ScheduleFriend";

export default function ScheduleItem(props: { name: string, img: string, dates: string[], friends: string[] }) {
  return (
    <div className="px-2 py-1 flex items-center gap-2 border-2 border-gray-100 rounded-xl cursor-pointer">
      <div className="flex-none w-12 aspect-square grid rounded-xl overflow-hidden">
        <img src={props.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold">{props.name}</h2>
        <div className="flex items-center gap-1 text-gray-400">
          <BiCalendarAlt />
          <span className="text-xs">{props.dates[0]} - {props.dates[1]}</span>
        </div>

        {/* friends */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {props.friends.slice(0, 3).map((img, index) => (
              <ScheduleFriend img={img} index={index} key={index} />
            ))}
          </div>
          <span className="text-sm font-semibold text-green-500">
            +{props.friends.length}
          </span>
        </div>
      </div>
    </div>
  );
}
