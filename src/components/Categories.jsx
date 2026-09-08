import { useApiList } from "../useApiList";

export function Categories() {
  const { data: categories, status } = useApiList("categories");

  return (
    <section>
      <h2 className="text-xl font-extrabold text-gray-800 mb-4">Рукнлар</h2>

      {status === "loading" && <p className="text-gray-400 text-sm">Юкланмоқда...</p>}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Серверга уланиб бўлмади. <code className="text-xs">http://localhost:3600/categories</code> ишлаётганини текширинг.
        </p>
      )}

      {status === "ok" && (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(cat => (
            <div key={cat.id} className="relative h-24 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition group">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />
              <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold leading-snug drop-shadow">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
