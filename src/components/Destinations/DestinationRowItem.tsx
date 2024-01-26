import React from "react";
import { BiCurrentLocation, BiStar } from "react-icons/bi";
import SubInfoTag from "../SubInfoTag";

export default function DestinationRowItem(props: { name: string, img: string, location: string, rating: number, price: number; }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="flex-none w-12 aspect-square grid rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={props.img} alt="" />
      </div>

      <div className="w-full flex flex-col gap-1">
        <h3 className="font-semibold">{props.name}</h3>

        <div className="flex items-center gap-2">
          <SubInfoTag icon={BiCurrentLocation} text={props.location} />
          <SubInfoTag icon={BiStar} text={props.rating} />
        </div>
      </div>

      <div className="flex-none flex items-end">
        <h4 className="text-xl font-semibold">${props.price}</h4>
        <span className="text-sm text-gray-400">/days</span>
      </div>
    </div>
  );
}
