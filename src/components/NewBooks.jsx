import { useApiList } from "../useApiList";
import { BookGridCard } from "./BookGridCard";

export function NewBooks() {
  const { data: newBooks, status } = useApiList("newBooks");

  return (
    <section>
      <h2 className="text-xl font-extrabold text-gray-800 mb-4">Янги қўшилганлар</h2>

      {status === "loading" && <p className="text-gray-400 text-sm">Юкланмоқда...</p>}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Серверга уланиб бўлмади. <code className="text-xs">http://localhost:3600/newBooks</code> ишлаётганини текширинг.
        </p>
      )}

      {status === "ok" && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 justify-items-center">
          {newBooks.map(book => <BookGridCard key={book.id} book={book} width={239} height={336} />)}
        </div>
      )}
    </section>
  );
}
