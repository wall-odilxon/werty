import { ICONS } from "../assets";
import { footerColumns } from "../data";

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-[#EEF4FF] pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col, i) => (
            <div key={i}>
              <h3 className="font-bold text-gray-800 mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}><a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Мобил илова</h3>
            <div className="flex flex-col gap-3">
              <a href="#"><img src={ICONS.googlePlay} alt="Google Play" className="h-10 w-auto" /></a>
              <a href="#"><img src={ICONS.appStore} alt="App Store" className="h-10 w-auto" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#11142D] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-xs mb-3">Ижтимоий тармоқлар</p>
            <a href="#"><img src={ICONS.social} alt="ijtimoiy tarmoqlar" className="h-6 w-auto" /></a>
          </div>

          <div>
            <p className="text-gray-400 text-xs mb-3">Боғланиш</p>
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-white text-sm">
              <span>+998 90 253 77 53</span>
              <span>support@liber.uz</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <img src={ICONS.uzcard} alt="Uzcard" className="h-9 w-auto" />
            <img src={ICONS.humo} alt="Humo" className="h-9 w-auto" />
            <div className="h-6 px-1.5 bg-white rounded-md flex items-center justify-center shadow-sm">
              <img src={ICONS.payme} alt="Payme" className="h-3 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
