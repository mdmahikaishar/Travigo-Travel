import React from "react";
import { BiCurrentLocation, BiStar } from "react-icons/bi";
import SubInfoTag from "../SubInfoTag";

export default function DestinationCard(props: { name: string, img: string, location: string, rating: number }) {
  return (
    <div className="aspect-[7/10] relative grid rounded-xl overflow-hidden transition-all cursor-pointer hover:shadow-md">
      <img className="w-full h-full object-cover" src={props.img} alt="" />

      <div className="p-4 w-full absolute left-0 bottom-0">
        <h3 className="font-semibold text-sm md:text-base text-white">{props.name}</h3>

        <div className="mt-1 flex items-center gap-2">
          <SubInfoTag icon={BiCurrentLocation} text={props.location} variant="light" />
          <SubInfoTag icon={BiStar} text={props.rating} variant="light" />
        </div>
      </div>
    </div>
  );
}
