import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { Toast } from "../components/Toast";

export function ProductDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [toastMessage, setToastMessage] = useState("");

  const book = state?.book;

  if (!book) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-500 mb-4">Маҳсулот топилмади.</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">Бош саҳифага қайтиш</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book, qty);
    setToastMessage("Саватга қўшилди");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}

      <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 text-sm mb-6">← Орқага</button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-72 aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-gray-100 shrink-0 mx-auto md:mx-0">
          <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-800 mb-2">{book.title}</h1>

          {book.genres && (
            <div className="text-sm text-blue-500 font-medium mb-3">{book.genres}</div>
          )}

          {book.rating && (
            <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold mb-6">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6L10 14.8 4.6 17.8l1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
              </svg>
              {book.rating}
            </div>
          )}

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
            Бу китоб ҳақида батафсил маълумот тez orada qo'shiladi. Ҳозирча муқова ва номи билан танишишингиз мумкин.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-700">Сони:</span>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition text-lg"
              >−</button>
              <span className="w-10 text-center font-semibold text-gray-800">{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition text-lg"
              >+</button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              Саватга қўшиш
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition"
            >
              Саватни кўриш
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
