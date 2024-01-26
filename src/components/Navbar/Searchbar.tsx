import React, { ForwardedRef, forwardRef } from "react";
import { BiSearchAlt } from "react-icons/bi";

export default forwardRef((props: {}, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="md:px-3 h-10 md:w-42 aspect-square md:aspect-auto flex items-center justify-center md:justify-start gap-2 bg-white text-gray-400 rounded-full cursor-pointer md:cursor-default focus-within:text-gray-900 hover:text-gray-900">
      <BiSearchAlt className="flex-none text-xl" />
      <input
        type="text"
        className="hidden md:block w-full text-sm bg-transparent outline-none"
        placeholder="Search Destination..."
        ref={ref}
      />
    </div>
  );
});