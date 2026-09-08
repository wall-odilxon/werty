import { Link } from "react-router-dom";
import { IMAGES, ICONS } from "../assets";
import { navLinks } from "../data";
import { useCart } from "../CartContext";

export function Header({ searchValue, setSearchValue, activeNav, setActiveNav, onLoginClick }) {
  const { totalCount } = useCart();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
        <img src={IMAGES.logo} alt="Liber" className="h-9 w-auto shrink-0" />

        <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition shrink-0">
          <span>⊞</span>Рукнлар<span className="text-gray-400 text-xs">▼</span>
        </button>

        <div className="flex-1 relative">
          <input
            type="text" placeholder="Қидириш" value={searchValue} onChange={e => setSearchValue(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 pr-10 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition">
            <img src={ICONS.search} alt="search" className="w-5 h-5" />
          </button>
        </div>

        <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition shrink-0">
          <span>🇺🇿</span>Ўз ▼
        </button>

        <Link to="/cart" className="relative text-gray-500 hover:text-blue-600 transition shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6">
            <circle cx="9" cy="21" r="1.4" />
            <circle cx="18" cy="21" r="1.4" />
            <path d="M2.5 3h2l2.2 11.4a2 2 0 002 1.6h8.6a2 2 0 002-1.6L20.5 7H6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {totalCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </Link>

        <button onClick={onLoginClick} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition shrink-0">
          Кириш
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-2 flex gap-6">
        {navLinks.map(link => (
          <button
            key={link} onClick={() => setActiveNav(link)}
            className={`text-sm font-medium pb-1 transition border-b-2 ${activeNav === link ? "text-blue-600 border-blue-600" : "text-blue-500 border-transparent hover:text-blue-700"}`}
          >
            {link}
          </button>
        ))}
      </div>
    </header>
  );
}
