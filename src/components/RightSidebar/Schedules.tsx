import React from "react";
import { MY_SCHEDULES } from "@/data";
import { BiDotsHorizontal } from "react-icons/bi";
import ScheduleItem from "./ScheduleItem";

export default function Scheduls() {
  return (
    <div className="">
      {/* head */}
      <div className="flex items-center justify-between cursor-default">
        <h3 className="text-base font-semibold">My Scheduls</h3>
        <button className="grid place-items-center text-gray-400 hover:text-gray-700">
          <BiDotsHorizontal />
        </button>
      </div>
      
      {/* contents */}
      <div className="mt-4 flex flex-col gap-4">
        {MY_SCHEDULES.map((schedule) => (
          <ScheduleItem {...schedule} key={schedule.name} />
        ))}
      </div>
    </div>
  );
}
