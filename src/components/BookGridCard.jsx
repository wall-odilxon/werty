import { useNavigate } from "react-router-dom";

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6L10 14.8 4.6 17.8l1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
    </svg>
  );
}

function HeadphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
      <path d="M4 13v-1a8 8 0 0116 0v1" strokeLinecap="round" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    </svg>
  );
}

export function BookGridCard({ book, width = 239, height = 336 }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center cursor-pointer group mx-auto"
      onClick={() => navigate("/product", { state: { book } })}
    >
      <div
        style={{ width, height }}
        className="rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 bg-gray-100"
      >
        <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3" style={{ width }}>
        <div className="text-sm font-semibold text-gray-800 truncate">{book.title}</div>
        <div className="text-[11px] text-blue-500 font-medium mt-0.5">{book.genres}</div>
        <div className="flex items-center gap-3 mt-1.5 text-gray-400">
          <span className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
            <StarIcon /> {book.rating}
          </span>
          <HeadphoneIcon />
        </div>
      </div>
    </div>
  );
}
