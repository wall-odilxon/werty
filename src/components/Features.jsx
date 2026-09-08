import { ICONS } from "../assets";
import { features } from "../data";

export function Features() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((f, i) => (
        <div key={i} className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-2 hover:shadow-md transition">
          <img src={ICONS[f.iconKey]} alt={f.title} className="w-10 h-10" />
          <div className="font-bold text-gray-800 text-sm">{f.title}</div>
          <div className="text-gray-400 text-xs leading-relaxed">{f.desc}</div>
        </div>
      ))}
    </section>
  );
}
