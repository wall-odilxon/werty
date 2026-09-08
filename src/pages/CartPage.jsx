import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { Toast } from "../components/Toast";

export function CartPage() {
  const { items, updateQty, removeFromCart, clearCart, totalCount, keyOf } = useCart();
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    clearCart();
    setToastMessage("Муваффақиятли буюртма берилди");
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}
        <p className="text-gray-500 mb-4">Саватингиз бўш.</p>
        <Link to="/" className="text-red-600 hover:text-red-700 font-medium">  ---HOMEga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}

      <h1 className="text-2xl font-extrabold text-gray-800 mb-8">Саватингиз ({totalCount})</h1>

      <div className="space-y-4 mb-10">
        {items.map(item => (
          <div key={keyOf(item)} className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4">
            <div className="w-16 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-800 truncate">{item.title}</div>
              {item.genres && <div className="text-xs text-blue-500 font-medium mt-0.5">{item.genres}</div>}
            </div>

            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shrink-0">
              <button
                onClick={() => updateQty(item, item.qty - 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
              >−</button>
              <span className="w-8 text-center text-sm font-semibold text-gray-800">{item.qty}</span>
              <button
                onClick={() => updateQty(item, item.qty + 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition"
              >+</button>
            </div>

            <button
              onClick={() => removeFromCart(item)}
              className="text-gray-300 hover:text-red-500 transition text-xl shrink-0"
            >×</button>
          </div>
        ))}
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
      >
        Буюртма бериш
      </button>
    </div>
  );
}
