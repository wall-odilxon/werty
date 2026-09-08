import { useApiList } from "../useApiList";
import { BookGridCard } from "./BookGridCard";

function ChevronIcon({ direction = "left" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AudioBooks() {
  const { data: audioBooks, status } = useApiList("audioBooks");

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-extrabold text-gray-800">Аудио китоблар</h2>
        <div className="flex items-center gap-3">
          <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition">
            <ChevronIcon direction="left" />
          </button>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map(i => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-blue-600" : "bg-gray-300"}`} />
            ))}
          </div>
          <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition">
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      {status === "loading" && <p className="text-gray-400 text-sm">Юкланмоқда...</p>}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Серверга уланиб бўлмади. <code className="text-xs">http://localhost:3600/audioBooks</code> ишлаётганини текширинг.
        </p>
      )}

      {status === "ok" && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 justify-items-center">
          {audioBooks.map(book => <BookGridCard key={book.id} book={book} width={239} height={336} />)}
        </div>
      )}
    </section>
  );
}
