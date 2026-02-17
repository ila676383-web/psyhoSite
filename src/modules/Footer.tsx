import MouseBackground from "@/components/MouseBackground";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full mt-40 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%)]"> 
      <MouseBackground />

      {/* затемняющая подложка */}
      <div className="relative z-10  ">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          {/* Блок 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Контакты</h3>
            <p className="opacity-80">г. Центр города</p>
            <p className="opacity-80">По предварительной записи</p>
          </div>

          {/* Блок 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Навигация</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/about" className="hover:opacity-100">
                  О проекте
                </Link>
              </li>
              <li>
                <Link href="/game" className="hover:opacity-100">
                  Игры
                </Link>
              </li>
              <li>
                <Link href="/libs" className="hover:opacity-100">
                  Библиотека
                </Link>
              </li>
            </ul>
          </div>

          {/* Блок 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Разработка</h3>
            <Link
              target="_blank"
              href="https://creatorlabs-psi.vercel.app/"
              className="opacity-80 hover:opacity-100"
            >
              SiteLabs ❤️
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;
