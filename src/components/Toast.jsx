export function Toast({ message, onClose }) {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-emerald-400 text-white rounded-2xl shadow-lg px-5 py-4 max-w-sm">
      <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3.5 h-3.5">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-sm font-medium flex-1">{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white text-lg leading-none shrink-0">×</button>
    </div>
  );
}
