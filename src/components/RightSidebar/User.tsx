import React from "react";
import { BiArrowToBottom, } from "react-icons/bi";

export default function User(props: {img: string, name: string, bio: string}) {
  return (
    <div className="flex items-center gap-2 cursor-default">
      <div className="flex-none w-10 aspect-square grid border border-gray-200 rounded-full overflow-hidden shadow-md cursor-pointer">
        <img className="w-full h-full object-cover" src={props.img} alt={props.name}/>
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-sm md:text-base">{props.name}</h3>
        <span className="text-xs md:text-sm text-gray-400">{props.bio}</span>
      </div>

      <button className="flex-none grid place-items-center text-gray-400 hover:text-gray-700">
        <BiArrowToBottom />
      </button>
    </div>
  );
}
