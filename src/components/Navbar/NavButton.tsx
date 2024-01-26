import React from "react";
import { IconType } from "react-icons";

export default function NavButton(props: { icon: IconType, number: number }) {
  return (
    <button className="h-10 aspect-square relative grid place-items-center bg-white text-gray-400 rounded-full hover:text-gray-900">
      <props.icon className="text-xl" />
      <span className="h-4 w-4 text-xs font-semibold absolute top-1 right-1 grid place-items-center text-white bg-orange-500 rounded-full cursor-default">
        {props.number}
      </span>
    </button>
  );
}
