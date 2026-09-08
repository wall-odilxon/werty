import { useState } from "react";

const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition bg-gray-50";
const btnCls = "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition text-base";
const closeBtnCls = "absolute -top-4 -right-4 text-gray-400 hover:text-gray-600 text-2xl font-light";
const modalWrapCls = "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm";
const modalBoxCls = "relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-10 overflow-hidden";
const labelCls = "block text-sm font-medium text-gray-700 mb-1";
const errorCls = "text-red-500 text-xs text-center -mt-3 mb-5";
const switchLinkCls = "text-indigo-500 hover:text-indigo-700 text-sm transition font-medium";

const USER_KEY = "liber_user";
const SESSION_KEY = "liber_session";

function WaveBg() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 300" fill="none">
      <path d="M-20 200 Q100 100 200 200 Q300 300 420 200" stroke="#6366f1" strokeWidth="40" fill="none" />
      <path d="M-20 250 Q100 150 200 250 Q300 350 420 250" stroke="#6366f1" strokeWidth="30" fill="none" />
      <path d="M-20 150 Q100 50  200 150 Q300 250 420 150" stroke="#6366f1" strokeWidth="20" fill="none" />
    </svg>
  );
}


export function RegisterModal({ onClose, onRegistered, onSwitchToLogin }) {
  const [ism, setIsm] = useState("");
  const [gmail, setGmail] = useState("");
  const [parol, setParol] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!ism.trim() || !gmail.trim() || !parol.trim()) {
      setError("Барча майдонларни тўлдиринг");
      return;
    }
    localStorage.setItem(USER_KEY, JSON.stringify({ ism: ism.trim(), gmail: gmail.trim(), parol: parol.trim() }));
    setError("");
    onRegistered();
  };

  return (
    <div className={modalWrapCls}>
      <div className={modalBoxCls}>
        <WaveBg />
        <div className="relative z-10">
          <button onClick={onClose} className={closeBtnCls}>×</button>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Ассалому алайкум</h2>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Рўйхатдан ўтинг!</h2>

          <div className="mb-5">
            <label className={labelCls}>ISM</label>
            <input type="text" value={ism} onChange={e => setIsm(e.target.value)} placeholder="__ ___ __ __" className={inputCls} />
          </div>

          <div className="mb-5">
            <label className={labelCls}>gmail</label>
            <input type="email" value={gmail} onChange={e => setGmail(e.target.value)} placeholder="__ ___ __ __" className={inputCls} />
          </div>

          <div className="mb-5">
            <label className={labelCls}>парол</label>
            <input type="password" value={parol} onChange={e => setParol(e.target.value)} placeholder="__ ___ __ __" className={inputCls} />
          </div>

          {error && <p className={errorCls}>{error}</p>}

          <button onClick={submit} className={`${btnCls} mb-5`}>Рўйхатдан ўтиш</button>

          <p className="text-center">
            Аккаунтингиз борми?{" "}
            <button onClick={onSwitchToLogin} className={switchLinkCls}>Киринг</button>
          </p>
        </div>
      </div>
    </div>
  );
}

/** Кириш: Gmail + Парол so'raydi, localStorage'dagi ma'lumot bilan solishtiradi */
export function LoginModal({ onClose, onLoggedIn, onSwitchToRegister }) {
  const [gmail, setGmail] = useState("");
  const [parol, setParol] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!gmail.trim() || !parol.trim()) {
      setError("Барча майдонларни тўлдиринг");
      return;
    }
    const saved = JSON.parse(localStorage.getItem(USER_KEY) || "null");
    if (!saved || saved.gmail !== gmail.trim() || saved.parol !== parol.trim()) {
      setError("Gmail ёки парол нотўғри");
      return;
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify({ ism: saved.ism, gmail: saved.gmail }));
    setError("");
    onLoggedIn(saved);
  };

  return (
    <div className={modalWrapCls}>
      <div className={modalBoxCls}>
        <WaveBg />
        <div className="relative z-10">
          <button onClick={onClose} className={closeBtnCls}>×</button>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Ассалому алайкум</h2>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Хуш келибсиз!</h2>

          <div className="mb-5">
            <label className={labelCls}>gmail</label>
            <input type="email" value={gmail} onChange={e => setGmail(e.target.value)} placeholder="__ ___ __ __" className={inputCls} />
          </div>

          <div className="mb-5">
            <label className={labelCls}>парол</label>
            <input type="password" value={parol} onChange={e => setParol(e.target.value)} placeholder="__ ___ __ __" className={inputCls} />
          </div>

          {error && <p className={errorCls}>{error}</p>}

          <button onClick={submit} className={`${btnCls} mb-5`}>Кириш</button>

          <p className="text-center">
            Аккаунтингиз йўқми?{" "}
            <button onClick={onSwitchToRegister} className={switchLinkCls}>Рўйхатдан ўтинг</button>
          </p>
        </div>
      </div>
    </div>
  );
}
