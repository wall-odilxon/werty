import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookCard({ book }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate("/product", { state: { book } })}
    >
      <div className={`w-36 h-52 rounded-xl overflow-hidden shadow-md transition-all duration-300 bg-gray-100 ${hovered ? "shadow-xl -translate-y-2 scale-105" : ""}`}>
        <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <span className="mt-3 text-sm font-medium text-gray-700 text-center">{book.title}</span>
    </div>
  );
}
