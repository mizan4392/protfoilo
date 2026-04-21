const getGlow = (
  color: "cyan" | "blue" | "green" | "pink" | "yellow" | "purple",
) => {
  switch (color) {
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "pink":
      return "bg-pink-500";
    case "yellow":
      return "bg-yellow-400";
    case "purple":
      return "bg-purple-500";
    case "cyan":
    default:
      return "bg-cyan-400";
  }
};

export interface ITechCard {
  icon: React.ReactNode;
  label?: string;
  color?: "cyan" | "blue" | "green" | "pink" | "yellow" | "purple";
}
export const TechCard = ({ icon, label, color = "cyan" }: ITechCard) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="relative w-20 h-20 rounded-xl flex items-center justify-center">
        {/* Glow layer */}
        <div
          className={`absolute inset-0 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300
          ${getGlow(color)}`}
        />

        {/* Main card */}
        <div className="relative w-20 h-20 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
          <div className="w-14 h-14 rounded-lg bg-gray-700 flex items-center justify-center">
            {/* {icon} */}
            <img
              src={icon as string}
              alt={label}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {label && (
        <span className="text-sm text-gray-300 group-hover:text-white transition">
          {label}
        </span>
      )}
    </div>
  );
};
