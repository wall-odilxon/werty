import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Categories } from "./components/Categories";
import { NewBooks } from "./components/NewBooks";
import { AudioBooks } from "./components/AudioBooks";
import { Footer } from "./components/Footer";
import { RegisterModal, LoginModal } from "./components/AuthModals";
import { Toast } from "./components/Toast";
import { ProductDetail } from "./pages/ProductDetail";
import { CartPage } from "./pages/CartPage";

export default function LiberBookstore() {
  const [searchValue, setSearchValue] = useState("");
  const [activeNav, setActiveNav] = useState("Аудиокитоб");
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(""), 3000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onRegistered={() => {
            setShowRegister(false);
            setShowLogin(true);
            setToastMessage("Рўйхатдан ўтилди");
          }}
          onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }}
        />
      )}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoggedIn={() => setShowLogin(false)}
          onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }}
        />
      )}

      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}

      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onLoginClick={() => setShowRegister(true)}
      />

      <Routes>
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
            <Hero />
            <Features />
            <Categories />
            <NewBooks />
            <AudioBooks />
          </main>
        } />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
