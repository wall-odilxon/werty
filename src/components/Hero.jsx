import { IMAGES } from "../assets";
import { useApiList } from "../useApiList";
import { BookCard } from "./BookCards";

export function Hero() {
  const { data: books, status } = useApiList("hot");

  return (
    <section style={{ backgroundColor: "#EEF4FF" }} className="rounded-2xl shadow-sm p-8">
      <div className="flex items-center gap-8 flex-nowrap">
        <div className="shrink-0 flex flex-col items-center gap-2">
          <h1 className="text-2xl font-extrabold text-gray-800 leading-snug">Кўп ўқилаётганлар</h1>
          <img src={IMAGES.heroIllustration} alt="Reading girl" className="w-44 h-44 object-contain" />
        </div>

        <div className="flex flex-row gap-4 ml-auto">
          {status === "loading" && <p className="text-gray-400 text-sm">Юкланмоқда...</p>}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Серверга уланиб бўлмади. <br />
              <code className="text-xs">http://localhost:3600/hot</code> ишлаётганини текширинг.
            </p>
          )}
          {status === "ok" && books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </section>
  );
}
