import React from "react";

export default function ScheduleFriend({ img, index }: { img: string; index: number }) {
  return (
    <div
      className={`w-5 aspect-square grid border-2 border-white rounded-full overflow-hidden ${
        index === 0 ? "" : "-ml-2"
      }`}
      style={{
        zIndex: 3 - index,
      }}
    >
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
