import React from "react";
import { POPULAR_DESTINATIONS } from "@/data";
import { DestinationCard } from "./Destinations";

export default function PopularDestinations() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] md:gap-4 gap-6">
      {POPULAR_DESTINATIONS.map((destination) => (
        <DestinationCard {...destination} key={destination.name}/>
      ))}
    </div>
  );
}
