import { IconType } from "react-icons";

export default function SubInfoTag(props: {icon: IconType, text: string | number, variant?: "dark" | "light"}) {
  return (
    <button
      className={`flex items-center gap-1 ${
        props.variant === "light"
          ? "text-gray-200 hover:text-white"
          : "text-gray-400 hover:text-black"
      }`}
    >
      <props.icon className="text-sm md:text-base" />
      <span className="text-xs md:text-sm">{props.text}</span>
    </button>
  );
}
